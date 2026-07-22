/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.c
  * @brief          : Main program body
  ******************************************************************************
  * @attention
  *
  * Copyright (c) 2025 STMicroelectronics.
  * All rights reserved.
  *
  * This software is licensed under terms that can be found in the LICENSE file
  * in the root directory of this software component.
  * If no LICENSE file comes with this software, it is provided AS-IS.
  *
  ******************************************************************************
  */
/* USER CODE END Header */
/* Includes ------------------------------------------------------------------*/
#include "main.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */
#include "stdint.h"
#include "stdio.h"
/* USER CODE END Includes */

/* Private typedef -----------------------------------------------------------*/
/* USER CODE BEGIN PTD */
typedef struct{
	uint8_t enable; // 0 -> enable on, 1 -> enable off
	uint8_t forward;	// 0 -> forward, 1 -> reverse
	uint8_t pot; 	// 0 -> pot on, 1 -> pot off
	uint8_t current; //0 -> system on, 1 -> system off

	uint8_t system; // 0 -> system on, 1 -> system off
	uint8_t moving; // 1 -> motor running, 0 -> motor stop
} Status_TypeDef;

typedef struct{
	uint32_t Current_Adc[3]; //All Phase Current Reading Buffer for ADC DMA.
	float F_Current_A; // Phase A Current Value.
	float F_Current_B; // Phase B Current Value.
	float F_Current_C; // Phase C Current Value.
} Current_TypeDef;

typedef struct{
	float F_Rpm; // Motor RPM Value.
	int I_Speed_Kmh; //Vehicle Speed Value Km/h.
	 uint8_t Motor_States; // Motor state. Between 0-6.
	 uint8_t Motor_States_Last; // Motor Last State. Between 0-6.
} Motor_TypeDef;

typedef struct{
//SPEED COUNTERS
	int Turn_Present; //Rotor present turns value.
	int Turn_Last; //Rotor last turns value.
	double Turn_Gap; //Rotor present and last turns gap.
	int StateChange_Counter; //Check for Rotor each states change.
	int Rpm_Counter; //If Rotor states changes rpm counter = 0.
/******************************************************************/
}Count_TypeDef;

typedef struct{
	uint32_t CCR; //Duty CCR value.
	uint32_t Duty_Max; // Maximum System Duty.
	uint32_t Duty_Perc; // Duty Percentage.
	float F_Duty;
	int I_Duty;
	uint16_t ADC_Value; //ADC 16-bit Value.
} Duty_TypeDef;

typedef struct{
	uint8_t Hall_A; // Hall Efect of A Value.
	uint8_t Hall_B; // Hall Efect of B Value.
	uint8_t Hall_C; // Hall Efect of C Value.
} Hall_TypeDef;

/* USER CODE END PTD */

/* Private define ------------------------------------------------------------*/
/* USER CODE BEGIN PD */
#define VREF 3.3
/* USER CODE END PD */

/* Private macro -------------------------------------------------------------*/
/* USER CODE BEGIN PM */

/* USER CODE END PM */

/* Private variables ---------------------------------------------------------*/
ADC_HandleTypeDef hadc1;
ADC_HandleTypeDef hadc2;
ADC_HandleTypeDef hadc3;

TIM_HandleTypeDef htim1;
TIM_HandleTypeDef htim5;
TIM_HandleTypeDef htim8;

UART_HandleTypeDef huart4;

/* USER CODE BEGIN PV */
Status_TypeDef sStatus_TypeDef;
Motor_TypeDef sMotor_TypeDef;
Current_TypeDef sCurrent_TypeDef;
Count_TypeDef sCount_TypeDef;
Duty_TypeDef sDuty_TypeDef;
Hall_TypeDef sHall_TypeDef;

Status_TypeDef sStatus_TypeDef = {
		.current = 1,
		.moving = 0,
};

Count_TypeDef sCount_TypeDef = {
		.StateChange_Counter = 0,
		.Rpm_Counter = 0,
};
Duty_TypeDef sDuty_TypeDef = {
		.CCR = 1000,
		.Duty_Perc = 80,

};
int S_Speed;
/* USER CODE END PV */

/* Private function prototypes -----------------------------------------------*/
void SystemClock_Config(void);
static void MX_GPIO_Init(void);
static void MX_ADC1_Init(void);
static void MX_ADC2_Init(void);
static void MX_ADC3_Init(void);
static void MX_TIM1_Init(void);
static void MX_TIM8_Init(void);
static void MX_UART4_Init(void);
static void MX_TIM5_Init(void);
/* USER CODE BEGIN PFP */
void Main_Code(Status_TypeDef *status); // All System and Read Functions.

void System_Control(Status_TypeDef *status);
void Enable_ReadControl(Status_TypeDef *status); // Enable Control and Read Functions.
void Forward_ReadControl(Status_TypeDef *status); // Forward/Reverse Control and Read Functions.
void Current_ReadControl(Current_TypeDef *cr); // Current Control and Read Functions.
void Pot_ReadControl(Status_TypeDef *status, Duty_TypeDef *duty); // Pot Control and Read Functions.

void Duty_Windup(Status_TypeDef *status, Duty_TypeDef *pot); // Control and Set Duty Value According to Maximum, Minimum and Current(not I) Values.
void Phase_Current_Values(Status_TypeDef *status, Current_TypeDef *cr); //Read Per Phase ADC Bit and run ACS.

void Hall_Read(Hall_TypeDef *hall); // Hall Efect Read for Rotor Position.
void Hall_States(Hall_TypeDef *hall, Motor_TypeDef *motor); // Convert Halls Binary Value.
void Motor_States(uint8_t H_A, uint8_t H_B, uint8_t H_C, uint8_t L_A, uint8_t L_B, uint8_t L_C); // Set MOSFETs PWM for all Phase.

void Motor_Clocwise(Motor_TypeDef *motor); // Motor moves Clockwise way.
void Motor_CClockwise(Motor_TypeDef *motor); // Motor moves Counter Clockwise way.

void Motor_Rpm_Calculator(); // Calculations for Motor RPM and Control Speed.
float Speed_for_Kmh(float rpm, float wheel_diameter); //RPM to Km/h Calculator.

void System_Led(Status_TypeDef *status);
void System_Led2(Status_TypeDef *status);

float ACS758LCB_100B(float Vcc, uint32_t adc);
/* USER CODE END PFP */

/* Private user code ---------------------------------------------------------*/
/* USER CODE BEGIN 0 */

/* USER CODE END 0 */

/**
  * @brief  The application entry point.
  * @retval int
  */
int main(void)
{

  /* USER CODE BEGIN 1 */

  /* USER CODE END 1 */

  /* MCU Configuration--------------------------------------------------------*/

  /* Reset of all peripherals, Initializes the Flash interface and the Systick. */
  HAL_Init();

  /* USER CODE BEGIN Init */

  /* USER CODE END Init */

  /* Configure the system clock */
  SystemClock_Config();

  /* USER CODE BEGIN SysInit */

  /* USER CODE END SysInit */

  /* Initialize all configured peripherals */
  MX_GPIO_Init();
  MX_ADC1_Init();
  MX_ADC2_Init();
  MX_ADC3_Init();
  MX_TIM1_Init();
  MX_TIM8_Init();
  MX_UART4_Init();
  MX_TIM5_Init();
  /* USER CODE BEGIN 2 */
  Motor_States(0, 0, 0, 0, 0, 0);

  Enable_ReadControl(&sStatus_TypeDef);
  Current_ReadControl(&sCurrent_TypeDef);

  Pot_ReadControl(&sStatus_TypeDef, &sDuty_TypeDef);
  Duty_Windup(&sStatus_TypeDef, &sDuty_TypeDef);

  sDuty_TypeDef.Duty_Max = (sDuty_TypeDef.CCR * sDuty_TypeDef.Duty_Perc) / 100;
  sStatus_TypeDef.system = 0;//sStatus_TypeDef.enable | sStatus_TypeDef.current;

  HAL_TIM_Base_Start(&htim1);
  HAL_TIM_Base_Start(&htim5);
  HAL_TIM_Base_Start(&htim8);
  /* USER CODE END 2 */

  /* Infinite loop */
  /* USER CODE BEGIN WHILE */
  while (1)
  {
    /* USER CODE END WHILE */

    /* USER CODE BEGIN 3 */
	  Phase_Current_Values(&sStatus_TypeDef, &sCurrent_TypeDef);
	  System_Control(&sStatus_TypeDef);
	  if(sStatus_TypeDef.system == 0){
		  Main_Code(&sStatus_TypeDef);
		  S_Speed = Speed_for_Kmh(sMotor_TypeDef.F_Rpm, 0.56);
	  }
	//  System_Led(&sStatus_TypeDef);
  }
  /* USER CODE END 3 */
}

/**
  * @brief System Clock Configuration
  * @retval None
  */
void SystemClock_Config(void)
{
  RCC_OscInitTypeDef RCC_OscInitStruct = {0};
  RCC_ClkInitTypeDef RCC_ClkInitStruct = {0};

  /** Configure the main internal regulator output voltage
  */
  __HAL_RCC_PWR_CLK_ENABLE();
  __HAL_PWR_VOLTAGESCALING_CONFIG(PWR_REGULATOR_VOLTAGE_SCALE1);

  /** Initializes the RCC Oscillators according to the specified parameters
  * in the RCC_OscInitTypeDef structure.
  */
  RCC_OscInitStruct.OscillatorType = RCC_OSCILLATORTYPE_HSI;
  RCC_OscInitStruct.HSIState = RCC_HSI_ON;
  RCC_OscInitStruct.HSICalibrationValue = RCC_HSICALIBRATION_DEFAULT;
  RCC_OscInitStruct.PLL.PLLState = RCC_PLL_ON;
  RCC_OscInitStruct.PLL.PLLSource = RCC_PLLSOURCE_HSI;
  RCC_OscInitStruct.PLL.PLLM = 8;
  RCC_OscInitStruct.PLL.PLLN = 180;
  RCC_OscInitStruct.PLL.PLLP = RCC_PLLP_DIV2;
  RCC_OscInitStruct.PLL.PLLQ = 2;
  RCC_OscInitStruct.PLL.PLLR = 2;
  if (HAL_RCC_OscConfig(&RCC_OscInitStruct) != HAL_OK)
  {
    Error_Handler();
  }

  /** Activate the Over-Drive mode
  */
  if (HAL_PWREx_EnableOverDrive() != HAL_OK)
  {
    Error_Handler();
  }

  /** Initializes the CPU, AHB and APB buses clocks
  */
  RCC_ClkInitStruct.ClockType = RCC_CLOCKTYPE_HCLK|RCC_CLOCKTYPE_SYSCLK
                              |RCC_CLOCKTYPE_PCLK1|RCC_CLOCKTYPE_PCLK2;
  RCC_ClkInitStruct.SYSCLKSource = RCC_SYSCLKSOURCE_PLLCLK;
  RCC_ClkInitStruct.AHBCLKDivider = RCC_SYSCLK_DIV1;
  RCC_ClkInitStruct.APB1CLKDivider = RCC_HCLK_DIV4;
  RCC_ClkInitStruct.APB2CLKDivider = RCC_HCLK_DIV2;

  if (HAL_RCC_ClockConfig(&RCC_ClkInitStruct, FLASH_LATENCY_5) != HAL_OK)
  {
    Error_Handler();
  }
}

/**
  * @brief ADC1 Initialization Function
  * @param None
  * @retval None
  */
static void MX_ADC1_Init(void)
{

  /* USER CODE BEGIN ADC1_Init 0 */

  /* USER CODE END ADC1_Init 0 */

  ADC_ChannelConfTypeDef sConfig = {0};

  /* USER CODE BEGIN ADC1_Init 1 */

  /* USER CODE END ADC1_Init 1 */

  /** Configure the global features of the ADC (Clock, Resolution, Data Alignment and number of conversion)
  */
  hadc1.Instance = ADC1;
  hadc1.Init.ClockPrescaler = ADC_CLOCK_SYNC_PCLK_DIV4;
  hadc1.Init.Resolution = ADC_RESOLUTION_12B;
  hadc1.Init.ScanConvMode = DISABLE;
  hadc1.Init.ContinuousConvMode = DISABLE;
  hadc1.Init.DiscontinuousConvMode = DISABLE;
  hadc1.Init.ExternalTrigConvEdge = ADC_EXTERNALTRIGCONVEDGE_NONE;
  hadc1.Init.ExternalTrigConv = ADC_SOFTWARE_START;
  hadc1.Init.DataAlign = ADC_DATAALIGN_RIGHT;
  hadc1.Init.NbrOfConversion = 1;
  hadc1.Init.DMAContinuousRequests = DISABLE;
  hadc1.Init.EOCSelection = ADC_EOC_SINGLE_CONV;
  if (HAL_ADC_Init(&hadc1) != HAL_OK)
  {
    Error_Handler();
  }

  /** Configure for the selected ADC regular channel its corresponding rank in the sequencer and its sample time.
  */
  sConfig.Channel = ADC_CHANNEL_4;
  sConfig.Rank = 1;
  sConfig.SamplingTime = ADC_SAMPLETIME_3CYCLES;
  if (HAL_ADC_ConfigChannel(&hadc1, &sConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN ADC1_Init 2 */

  /* USER CODE END ADC1_Init 2 */

}

/**
  * @brief ADC2 Initialization Function
  * @param None
  * @retval None
  */
static void MX_ADC2_Init(void)
{

  /* USER CODE BEGIN ADC2_Init 0 */

  /* USER CODE END ADC2_Init 0 */

  ADC_ChannelConfTypeDef sConfig = {0};

  /* USER CODE BEGIN ADC2_Init 1 */

  /* USER CODE END ADC2_Init 1 */

  /** Configure the global features of the ADC (Clock, Resolution, Data Alignment and number of conversion)
  */
  hadc2.Instance = ADC2;
  hadc2.Init.ClockPrescaler = ADC_CLOCK_SYNC_PCLK_DIV4;
  hadc2.Init.Resolution = ADC_RESOLUTION_12B;
  hadc2.Init.ScanConvMode = DISABLE;
  hadc2.Init.ContinuousConvMode = DISABLE;
  hadc2.Init.DiscontinuousConvMode = DISABLE;
  hadc2.Init.ExternalTrigConvEdge = ADC_EXTERNALTRIGCONVEDGE_NONE;
  hadc2.Init.ExternalTrigConv = ADC_SOFTWARE_START;
  hadc2.Init.DataAlign = ADC_DATAALIGN_RIGHT;
  hadc2.Init.NbrOfConversion = 1;
  hadc2.Init.DMAContinuousRequests = DISABLE;
  hadc2.Init.EOCSelection = ADC_EOC_SINGLE_CONV;
  if (HAL_ADC_Init(&hadc2) != HAL_OK)
  {
    Error_Handler();
  }

  /** Configure for the selected ADC regular channel its corresponding rank in the sequencer and its sample time.
  */
  sConfig.Channel = ADC_CHANNEL_9;
  sConfig.Rank = 1;
  sConfig.SamplingTime = ADC_SAMPLETIME_3CYCLES;
  if (HAL_ADC_ConfigChannel(&hadc2, &sConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN ADC2_Init 2 */

  /* USER CODE END ADC2_Init 2 */

}

/**
  * @brief ADC3 Initialization Function
  * @param None
  * @retval None
  */
static void MX_ADC3_Init(void)
{

  /* USER CODE BEGIN ADC3_Init 0 */

  /* USER CODE END ADC3_Init 0 */

  ADC_ChannelConfTypeDef sConfig = {0};

  /* USER CODE BEGIN ADC3_Init 1 */

  /* USER CODE END ADC3_Init 1 */

  /** Configure the global features of the ADC (Clock, Resolution, Data Alignment and number of conversion)
  */
  hadc3.Instance = ADC3;
  hadc3.Init.ClockPrescaler = ADC_CLOCK_SYNC_PCLK_DIV4;
  hadc3.Init.Resolution = ADC_RESOLUTION_12B;
  hadc3.Init.ScanConvMode = DISABLE;
  hadc3.Init.ContinuousConvMode = DISABLE;
  hadc3.Init.DiscontinuousConvMode = DISABLE;
  hadc3.Init.ExternalTrigConvEdge = ADC_EXTERNALTRIGCONVEDGE_NONE;
  hadc3.Init.ExternalTrigConv = ADC_SOFTWARE_START;
  hadc3.Init.DataAlign = ADC_DATAALIGN_RIGHT;
  hadc3.Init.NbrOfConversion = 1;
  hadc3.Init.DMAContinuousRequests = DISABLE;
  hadc3.Init.EOCSelection = ADC_EOC_SINGLE_CONV;
  if (HAL_ADC_Init(&hadc3) != HAL_OK)
  {
    Error_Handler();
  }

  /** Configure for the selected ADC regular channel its corresponding rank in the sequencer and its sample time.
  */
  sConfig.Channel = ADC_CHANNEL_1;
  sConfig.Rank = 1;
  sConfig.SamplingTime = ADC_SAMPLETIME_3CYCLES;
  if (HAL_ADC_ConfigChannel(&hadc3, &sConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN ADC3_Init 2 */

  /* USER CODE END ADC3_Init 2 */

}

/**
  * @brief TIM1 Initialization Function
  * @param None
  * @retval None
  */
static void MX_TIM1_Init(void)
{

  /* USER CODE BEGIN TIM1_Init 0 */

  /* USER CODE END TIM1_Init 0 */

  TIM_ClockConfigTypeDef sClockSourceConfig = {0};
  TIM_MasterConfigTypeDef sMasterConfig = {0};
  TIM_OC_InitTypeDef sConfigOC = {0};
  TIM_BreakDeadTimeConfigTypeDef sBreakDeadTimeConfig = {0};

  /* USER CODE BEGIN TIM1_Init 1 */

  /* USER CODE END TIM1_Init 1 */
  htim1.Instance = TIM1;
  htim1.Init.Prescaler = 0;
  htim1.Init.CounterMode = TIM_COUNTERMODE_UP;
  htim1.Init.Period = 65535;
  htim1.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
  htim1.Init.RepetitionCounter = 0;
  htim1.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;
  if (HAL_TIM_Base_Init(&htim1) != HAL_OK)
  {
    Error_Handler();
  }
  sClockSourceConfig.ClockSource = TIM_CLOCKSOURCE_INTERNAL;
  if (HAL_TIM_ConfigClockSource(&htim1, &sClockSourceConfig) != HAL_OK)
  {
    Error_Handler();
  }
  if (HAL_TIM_OC_Init(&htim1) != HAL_OK)
  {
    Error_Handler();
  }
  sMasterConfig.MasterOutputTrigger = TIM_TRGO_RESET;
  sMasterConfig.MasterSlaveMode = TIM_MASTERSLAVEMODE_DISABLE;
  if (HAL_TIMEx_MasterConfigSynchronization(&htim1, &sMasterConfig) != HAL_OK)
  {
    Error_Handler();
  }
  sConfigOC.OCMode = TIM_OCMODE_TIMING;
  sConfigOC.Pulse = 0;
  sConfigOC.OCPolarity = TIM_OCPOLARITY_HIGH;
  sConfigOC.OCNPolarity = TIM_OCNPOLARITY_HIGH;
  sConfigOC.OCFastMode = TIM_OCFAST_DISABLE;
  sConfigOC.OCIdleState = TIM_OCIDLESTATE_RESET;
  sConfigOC.OCNIdleState = TIM_OCNIDLESTATE_RESET;
  if (HAL_TIM_OC_ConfigChannel(&htim1, &sConfigOC, TIM_CHANNEL_2) != HAL_OK)
  {
    Error_Handler();
  }
  sBreakDeadTimeConfig.OffStateRunMode = TIM_OSSR_DISABLE;
  sBreakDeadTimeConfig.OffStateIDLEMode = TIM_OSSI_DISABLE;
  sBreakDeadTimeConfig.LockLevel = TIM_LOCKLEVEL_OFF;
  sBreakDeadTimeConfig.DeadTime = 0;
  sBreakDeadTimeConfig.BreakState = TIM_BREAK_DISABLE;
  sBreakDeadTimeConfig.BreakPolarity = TIM_BREAKPOLARITY_HIGH;
  sBreakDeadTimeConfig.AutomaticOutput = TIM_AUTOMATICOUTPUT_DISABLE;
  if (HAL_TIMEx_ConfigBreakDeadTime(&htim1, &sBreakDeadTimeConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN TIM1_Init 2 */

  /* USER CODE END TIM1_Init 2 */
  HAL_TIM_MspPostInit(&htim1);

}

/**
  * @brief TIM5 Initialization Function
  * @param None
  * @retval None
  */
static void MX_TIM5_Init(void)
{

  /* USER CODE BEGIN TIM5_Init 0 */

  /* USER CODE END TIM5_Init 0 */

  TIM_ClockConfigTypeDef sClockSourceConfig = {0};
  TIM_MasterConfigTypeDef sMasterConfig = {0};

  /* USER CODE BEGIN TIM5_Init 1 */

  /* USER CODE END TIM5_Init 1 */
  htim5.Instance = TIM5;
  htim5.Init.Prescaler = 0;
  htim5.Init.CounterMode = TIM_COUNTERMODE_UP;
  htim5.Init.Period = 4294967295;
  htim5.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
  htim5.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;
  if (HAL_TIM_Base_Init(&htim5) != HAL_OK)
  {
    Error_Handler();
  }
  sClockSourceConfig.ClockSource = TIM_CLOCKSOURCE_INTERNAL;
  if (HAL_TIM_ConfigClockSource(&htim5, &sClockSourceConfig) != HAL_OK)
  {
    Error_Handler();
  }
  sMasterConfig.MasterOutputTrigger = TIM_TRGO_RESET;
  sMasterConfig.MasterSlaveMode = TIM_MASTERSLAVEMODE_DISABLE;
  if (HAL_TIMEx_MasterConfigSynchronization(&htim5, &sMasterConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN TIM5_Init 2 */

  /* USER CODE END TIM5_Init 2 */

}

/**
  * @brief TIM8 Initialization Function
  * @param None
  * @retval None
  */
static void MX_TIM8_Init(void)
{

  /* USER CODE BEGIN TIM8_Init 0 */

  /* USER CODE END TIM8_Init 0 */

  TIM_ClockConfigTypeDef sClockSourceConfig = {0};
  TIM_MasterConfigTypeDef sMasterConfig = {0};
  TIM_OC_InitTypeDef sConfigOC = {0};
  TIM_BreakDeadTimeConfigTypeDef sBreakDeadTimeConfig = {0};

  /* USER CODE BEGIN TIM8_Init 1 */

  /* USER CODE END TIM8_Init 1 */
  htim8.Instance = TIM8;
  htim8.Init.Prescaler = 0;
  htim8.Init.CounterMode = TIM_COUNTERMODE_UP;
  htim8.Init.Period = 65535;
  htim8.Init.ClockDivision = TIM_CLOCKDIVISION_DIV1;
  htim8.Init.RepetitionCounter = 0;
  htim8.Init.AutoReloadPreload = TIM_AUTORELOAD_PRELOAD_DISABLE;
  if (HAL_TIM_Base_Init(&htim8) != HAL_OK)
  {
    Error_Handler();
  }
  sClockSourceConfig.ClockSource = TIM_CLOCKSOURCE_INTERNAL;
  if (HAL_TIM_ConfigClockSource(&htim8, &sClockSourceConfig) != HAL_OK)
  {
    Error_Handler();
  }
  if (HAL_TIM_OC_Init(&htim8) != HAL_OK)
  {
    Error_Handler();
  }
  sMasterConfig.MasterOutputTrigger = TIM_TRGO_RESET;
  sMasterConfig.MasterSlaveMode = TIM_MASTERSLAVEMODE_DISABLE;
  if (HAL_TIMEx_MasterConfigSynchronization(&htim8, &sMasterConfig) != HAL_OK)
  {
    Error_Handler();
  }
  sConfigOC.OCMode = TIM_OCMODE_TIMING;
  sConfigOC.Pulse = 0;
  sConfigOC.OCPolarity = TIM_OCPOLARITY_HIGH;
  sConfigOC.OCNPolarity = TIM_OCNPOLARITY_HIGH;
  sConfigOC.OCFastMode = TIM_OCFAST_DISABLE;
  sConfigOC.OCIdleState = TIM_OCIDLESTATE_RESET;
  sConfigOC.OCNIdleState = TIM_OCNIDLESTATE_RESET;
  if (HAL_TIM_OC_ConfigChannel(&htim8, &sConfigOC, TIM_CHANNEL_1) != HAL_OK)
  {
    Error_Handler();
  }
  if (HAL_TIM_OC_ConfigChannel(&htim8, &sConfigOC, TIM_CHANNEL_3) != HAL_OK)
  {
    Error_Handler();
  }
  sBreakDeadTimeConfig.OffStateRunMode = TIM_OSSR_DISABLE;
  sBreakDeadTimeConfig.OffStateIDLEMode = TIM_OSSI_DISABLE;
  sBreakDeadTimeConfig.LockLevel = TIM_LOCKLEVEL_OFF;
  sBreakDeadTimeConfig.DeadTime = 0;
  sBreakDeadTimeConfig.BreakState = TIM_BREAK_DISABLE;
  sBreakDeadTimeConfig.BreakPolarity = TIM_BREAKPOLARITY_HIGH;
  sBreakDeadTimeConfig.AutomaticOutput = TIM_AUTOMATICOUTPUT_DISABLE;
  if (HAL_TIMEx_ConfigBreakDeadTime(&htim8, &sBreakDeadTimeConfig) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN TIM8_Init 2 */

  /* USER CODE END TIM8_Init 2 */
  HAL_TIM_MspPostInit(&htim8);

}

/**
  * @brief UART4 Initialization Function
  * @param None
  * @retval None
  */
static void MX_UART4_Init(void)
{

  /* USER CODE BEGIN UART4_Init 0 */

  /* USER CODE END UART4_Init 0 */

  /* USER CODE BEGIN UART4_Init 1 */

  /* USER CODE END UART4_Init 1 */
  huart4.Instance = UART4;
  huart4.Init.BaudRate = 115200;
  huart4.Init.WordLength = UART_WORDLENGTH_8B;
  huart4.Init.StopBits = UART_STOPBITS_1;
  huart4.Init.Parity = UART_PARITY_NONE;
  huart4.Init.Mode = UART_MODE_TX_RX;
  huart4.Init.HwFlowCtl = UART_HWCONTROL_NONE;
  huart4.Init.OverSampling = UART_OVERSAMPLING_16;
  if (HAL_UART_Init(&huart4) != HAL_OK)
  {
    Error_Handler();
  }
  /* USER CODE BEGIN UART4_Init 2 */

  /* USER CODE END UART4_Init 2 */

}

/**
  * @brief GPIO Initialization Function
  * @param None
  * @retval None
  */
static void MX_GPIO_Init(void)
{
  GPIO_InitTypeDef GPIO_InitStruct = {0};
  /* USER CODE BEGIN MX_GPIO_Init_1 */
  /* USER CODE END MX_GPIO_Init_1 */

  /* GPIO Ports Clock Enable */
  __HAL_RCC_GPIOA_CLK_ENABLE();
  __HAL_RCC_GPIOB_CLK_ENABLE();
  __HAL_RCC_GPIOC_CLK_ENABLE();

  /*Configure GPIO pin Output Level */
  HAL_GPIO_WritePin(GPIOB, USERLED2_Pin|USERLED_Pin, GPIO_PIN_RESET);

  /*Configure GPIO pin Output Level */
  HAL_GPIO_WritePin(LOW_A_GPIO_Port, LOW_A_Pin, GPIO_PIN_RESET);

  /*Configure GPIO pin Output Level */
  HAL_GPIO_WritePin(GPIOA, LOW_B_Pin|LOW_C_Pin, GPIO_PIN_RESET);

  /*Configure GPIO pins : USERLED2_Pin USERLED_Pin */
  GPIO_InitStruct.Pin = USERLED2_Pin|USERLED_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(GPIOB, &GPIO_InitStruct);

  /*Configure GPIO pins : FWR_REV_Pin BUTTON2_Pin HALL_A_Pin HALL_B_Pin
                           HALL_C_Pin */
  GPIO_InitStruct.Pin = FWR_REV_Pin|BUTTON2_Pin|HALL_A_Pin|HALL_B_Pin
                          |HALL_C_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  HAL_GPIO_Init(GPIOB, &GPIO_InitStruct);

  /*Configure GPIO pin : LOW_A_Pin */
  GPIO_InitStruct.Pin = LOW_A_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(LOW_A_GPIO_Port, &GPIO_InitStruct);

  /*Configure GPIO pins : LOW_B_Pin LOW_C_Pin */
  GPIO_InitStruct.Pin = LOW_B_Pin|LOW_C_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_OUTPUT_PP;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  GPIO_InitStruct.Speed = GPIO_SPEED_FREQ_LOW;
  HAL_GPIO_Init(GPIOA, &GPIO_InitStruct);

  /*Configure GPIO pin : ENABLE_Pin */
  GPIO_InitStruct.Pin = ENABLE_Pin;
  GPIO_InitStruct.Mode = GPIO_MODE_INPUT;
  GPIO_InitStruct.Pull = GPIO_NOPULL;
  HAL_GPIO_Init(ENABLE_GPIO_Port, &GPIO_InitStruct);

  /* USER CODE BEGIN MX_GPIO_Init_2 */
  /* USER CODE END MX_GPIO_Init_2 */
}

/* USER CODE BEGIN 4 */
void Main_Code(Status_TypeDef *status){
	Hall_Read(&sHall_TypeDef);
	Hall_States(&sHall_TypeDef, &sMotor_TypeDef);
	Motor_Rpm_Calculator(&sMotor_TypeDef, &sCount_TypeDef);
	if((status->moving == 0) && (status->pot == 1)){
		Forward_ReadControl(&sStatus_TypeDef);
	}
	if(status->forward == 0){
		Motor_CClockwise(&sMotor_TypeDef);
	}
	else if(status->forward == 1){
		Motor_Clocwise(&sMotor_TypeDef);
	}
}

void System_Control(Status_TypeDef *status){
	status->system = status->enable | status->current;
	if(status->system == 0){
		Enable_ReadControl(&sStatus_TypeDef);
		Pot_ReadControl(&sStatus_TypeDef, &sDuty_TypeDef);
	}
	else if(status->system == 1){
		Motor_States(0, 0, 0, 0, 0, 0);
		sDuty_TypeDef.I_Duty = 0;
		Enable_ReadControl(&sStatus_TypeDef);
	}
}

/*
 * Enable Control and Read Functions.
 */
void Enable_ReadControl(Status_TypeDef *status){
	//If Enable Get 0 Switch Enable; If Enable Get 1 Switch Disable.
	status->enable = HAL_GPIO_ReadPin(ENABLE_GPIO_Port, ENABLE_Pin);
}

/*
 * Forward/Reverse Control and Read Functions.
 */
void Forward_ReadControl(Status_TypeDef *status){
	//If Forward Get 0 Switch Forward; If Forward Get 1 Switch Reverse.
	status->forward = HAL_GPIO_ReadPin(FWR_REV_GPIO_Port,FWR_REV_Pin);
}

/*
 * 	 Current Control and Read Functions.
 */
void Current_ReadControl(Current_TypeDef *cr){
	HAL_ADC_Start_DMA(&hadc1, cr->Current_Adc , sizeof(cr->Current_Adc));
}

/*
 * Read Per Phase ADC Bit and run ACS.
 */
void Phase_Current_Values(Status_TypeDef *status, Current_TypeDef *cr){
	cr->F_Current_A = ACS758LCB_100B(3.3, cr->Current_Adc[0]);
	cr->F_Current_B = ACS758LCB_100B(3.3, cr->Current_Adc[1]);
	cr->F_Current_C = ACS758LCB_100B(3.3, cr->Current_Adc[2]);
	if((cr->F_Current_A || cr->F_Current_B || cr->F_Current_C) > 0){
		status->current = 0;
	}else{
		status->current = 1;
	}
}

/*
 * Pot Control and Read Functions.
 */
void Pot_ReadControl(Status_TypeDef *status, Duty_TypeDef *duty){
	HAL_ADC_Start(&hadc2);
	duty->ADC_Value = HAL_ADC_GetValue(&hadc2);
	if(duty->ADC_Value < 10){
		status->pot = 1;
	} else {
		status->pot = 0;
	}
}

/*
 *  Control and Set Duty Value According to Maximum, Minimum and Current(not I) Values.
 */
void Duty_Windup(Status_TypeDef *status, Duty_TypeDef *pot){
	pot->F_Duty = (pot->CCR * pot->ADC_Value) / 4095.0f;
	pot->I_Duty = (float)pot->F_Duty;

	if(pot->I_Duty >= pot->Duty_Max){
		pot->I_Duty = pot->Duty_Max;
	}
	if(pot->I_Duty > 0){
		status->pot = 0;
	} else if(pot->I_Duty <= 0){
		status->pot = 1;
	}
}

/*
 * Hall Efect Read for Rotor Position.
 */
void Hall_Read(Hall_TypeDef *hall){
	hall->Hall_A = HAL_GPIO_ReadPin(HALL_A_GPIO_Port, HALL_A_Pin);
	hall->Hall_B = HAL_GPIO_ReadPin(HALL_B_GPIO_Port, HALL_B_Pin);
	hall->Hall_C = HAL_GPIO_ReadPin(HALL_C_GPIO_Port, HALL_C_Pin);

}

/*
 * Convert Halls Binary Value.
 */
void Hall_States(Hall_TypeDef *hall, Motor_TypeDef *motor){
	motor->Motor_States = (hall->Hall_A << 2) | (hall->Hall_B << 1) | (hall->Hall_C);
}

 /*
  *  Set MOSFETs PWM for all Phase.
  */
void Motor_States(uint8_t H_A, uint8_t H_B, uint8_t H_C, uint8_t L_A, uint8_t L_B, uint8_t L_C){
	TIM8->CCR1 = H_A;
	TIM8->CCR3 = H_B;
	TIM1->CCR2 = H_C;

	HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_1);
	HAL_TIM_PWM_Start(&htim8, TIM_CHANNEL_3);
	HAL_TIM_PWM_Start(&htim1, TIM_CHANNEL_2);

	HAL_GPIO_WritePin(GPIOC, GPIO_PIN_7, L_A);
	HAL_GPIO_WritePin(GPIOA, GPIO_PIN_8, L_B);
	HAL_GPIO_WritePin(GPIOA, GPIO_PIN_10, L_C);
}

/*
 * Motor moves Clockwise way.
 */
void Motor_Clocwise(Motor_TypeDef *motor){
	Pot_ReadControl(&sStatus_TypeDef, &sDuty_TypeDef);
	Duty_Windup(&sStatus_TypeDef, &sDuty_TypeDef);
	//Hall_States(&sHall_TypeDef, &sMotor_TypeDef);

	uint8_t motor_states = motor->Motor_States;
	int duty = sDuty_TypeDef.I_Duty;

	if(motor_states == 0b00000001){
		Motor_States(duty, 0, 0, 0, 1, 0); //HIGH A - LOW B
	}
	else if(motor_states == 0b00000010){
		Motor_States(duty, 0, 0, 0, 0, 1);//HIGH A - LOW C
	}
	else if(motor_states == 0b00000011){
		Motor_States(0, duty, 0, 0, 0, 1);//HIGH B - LOW C
	}
	else if(motor_states == 0b00000100){
		Motor_States(0, duty, 0, 1, 0, 0);//HIGH B - LOW A
	}
	else if(motor_states == 0b00000101){
		Motor_States(0, 0, duty, 1, 0, 0);//HIGH C - LOW A
	}
	else if(motor_states == 0b00000110){
		Motor_States(0, 0, duty, 0, 1, 0);//HIGH C - LOW B
	}
	else{
		Motor_States(0, 0, 0, 0, 0, 0);
	}
}

/*
 * 	 Motor moves Counter Clockwise way.
 */
void Motor_CClockwise(Motor_TypeDef *motor){
	Pot_ReadControl(&sStatus_TypeDef, &sDuty_TypeDef);
	Duty_Windup(&sStatus_TypeDef, &sDuty_TypeDef);
	//Hall_States(&sHall_TypeDef, &sMotor_TypeDef);

	uint8_t motor_states = motor->Motor_States;
	int duty = sDuty_TypeDef.I_Duty;

	if(motor_states == 0b00000001){
		Motor_States(0, duty, 0, 1, 0, 0); //HIGH B - LOW A
	}
	else if(motor_states == 0b00000010){
		Motor_States(0, 0, duty, 1, 0, 0); //HIGH C - LOW A
	}
	else if(motor_states == 0b00000011){
		Motor_States(0, 0, duty, 0, 1, 0); //HIGH C - LOW B
	}
	else if(motor_states == 0b00000100){
		Motor_States(duty, 0, 0, 0, 1, 0); //HIGH A - LOW B
	}
	else if(motor_states == 0b00000101){
		Motor_States(duty, 0, 0, 0, 0, 1); //HIGH A - LOW C
		}
	else if(motor_states == 0b00000110){
		Motor_States(0, duty, 0, 0, 0, 1); //HIGH B - LOW C
	}
	else{
		Motor_States(0, 0, 0, 0, 0, 0);
	}
}

/*
 * 	Calculations for Motor RPM.
 *
 */
void Motor_Rpm_Calculator(Motor_TypeDef *motor, Count_TypeDef *count){
	float second;
	Hall_Read(&sHall_TypeDef);
	Hall_States(&sHall_TypeDef, &sMotor_TypeDef);
	if(motor->Motor_States == motor->Motor_States_Last){
		count->Rpm_Counter++;
	}
	else if((motor->Motor_States_Last != 0) && (motor->Motor_States_Last != motor->Motor_States)){
		count->Rpm_Counter = 0;
		count->StateChange_Counter++;
		sStatus_TypeDef.moving = 1;
		if(motor->Motor_States_Last == 6){
			count->Turn_Present = TIM5->CNT;
			count->Turn_Gap = count->Turn_Present - count->Turn_Last;
			second =(1.0 / 1000000) * count->Turn_Gap;
			motor->F_Rpm = 60 / second;
			count->Turn_Last = count->Turn_Present;
			count->StateChange_Counter = 0;
		}
	}

	if(motor->F_Rpm <= 10){
		sStatus_TypeDef.moving = 0;
	}
	motor->Motor_States_Last = motor->Motor_States;
}

/*
 * RPM to Km/h Calculator.
 */
float Speed_for_Kmh(float rpm, float wheel_diameter){
	float area = wheel_diameter * 3.1415926535;
	float F_Speed = 0.0f;
	F_Speed = ((area * rpm) * 60) / 1000;
	return F_Speed;
}

void System_Led(Status_TypeDef *status){
	if(status->system == 1){
		HAL_GPIO_WritePin(USERLED_GPIO_Port, USERLED_Pin, 1);
	}
	else if(status->system == 0){
		HAL_GPIO_WritePin(USERLED_GPIO_Port, USERLED_Pin, 0);
	}
	if(status->pot == 0){
		HAL_GPIO_WritePin(USERLED2_GPIO_Port, USERLED2_Pin, 1);
	}
	else if(status->pot == 1){
		HAL_GPIO_WritePin(USERLED2_GPIO_Port, USERLED2_Pin, 0);
	}
}

float ACS758LCB_100B(float Vcc, uint32_t adc){
	float adc_value = adc;
	//float V0Q_val = 0.5; //5V & 3.3V
	float sens = 20.0;
	const float Factor = sens/1000;
	const float V0Q = Vcc / 2;
	float voltage = (adc_value * VREF) / 4095.0;
	const float cutoff_limit = 2.0; //İstenilen Akımdan sonrasını ölçmek için
	float cutoff = Factor / cutoff_limit;
	float current;
	current = (voltage - V0Q) / Factor;

	if(current < cutoff)
		current = 0;
	return current;

}
/* USER CODE END 4 */

/**
  * @brief  This function is executed in case of error occurrence.
  * @retval None
  */
void Error_Handler(void)
{
  /* USER CODE BEGIN Error_Handler_Debug */
  /* User can add his own implementation to report the HAL error return state */
  __disable_irq();
  while (1)
  {
  }
  /* USER CODE END Error_Handler_Debug */
}

#ifdef  USE_FULL_ASSERT
/**
  * @brief  Reports the name of the source file and the source line number
  *         where the assert_param error has occurred.
  * @param  file: pointer to the source file name
  * @param  line: assert_param error line source number
  * @retval None
  */
void assert_failed(uint8_t *file, uint32_t line)
{
  /* USER CODE BEGIN 6 */
  /* User can add his own implementation to report the file name and line number,
     ex: printf("Wrong parameters value: file %s on line %d\r\n", file, line) */
  /* USER CODE END 6 */
}
#endif /* USE_FULL_ASSERT */
