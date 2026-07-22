/* USER CODE BEGIN Header */
/**
  ******************************************************************************
  * @file           : main.h
  * @brief          : Header for main.c file.
  *                   This file contains the common defines of the application.
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

/* Define to prevent recursive inclusion -------------------------------------*/
#ifndef __MAIN_H
#define __MAIN_H

#ifdef __cplusplus
extern "C" {
#endif

/* Includes ------------------------------------------------------------------*/
#include "stm32f4xx_hal.h"

/* Private includes ----------------------------------------------------------*/
/* USER CODE BEGIN Includes */

/* USER CODE END Includes */

/* Exported types ------------------------------------------------------------*/
/* USER CODE BEGIN ET */

/* USER CODE END ET */

/* Exported constants --------------------------------------------------------*/
/* USER CODE BEGIN EC */

/* USER CODE END EC */

/* Exported macro ------------------------------------------------------------*/
/* USER CODE BEGIN EM */

/* USER CODE END EM */

void HAL_TIM_MspPostInit(TIM_HandleTypeDef *htim);

/* Exported functions prototypes ---------------------------------------------*/
void Error_Handler(void);

/* USER CODE BEGIN EFP */

/* USER CODE END EFP */

/* Private defines -----------------------------------------------------------*/
#define Voltage_Pin GPIO_PIN_1
#define Voltage_GPIO_Port GPIOA
#define Current_A_Pin GPIO_PIN_4
#define Current_A_GPIO_Port GPIOA
#define Current_B_Pin GPIO_PIN_5
#define Current_B_GPIO_Port GPIOA
#define Current_C_Pin GPIO_PIN_6
#define Current_C_GPIO_Port GPIOA
#define POT_Pin GPIO_PIN_1
#define POT_GPIO_Port GPIOB
#define USERLED2_Pin GPIO_PIN_12
#define USERLED2_GPIO_Port GPIOB
#define FWR_REV_Pin GPIO_PIN_13
#define FWR_REV_GPIO_Port GPIOB
#define USERLED_Pin GPIO_PIN_15
#define USERLED_GPIO_Port GPIOB
#define HIGH_A_Pin GPIO_PIN_6
#define HIGH_A_GPIO_Port GPIOC
#define LOW_A_Pin GPIO_PIN_7
#define LOW_A_GPIO_Port GPIOC
#define HIGH_B_Pin GPIO_PIN_8
#define HIGH_B_GPIO_Port GPIOC
#define LOW_B_Pin GPIO_PIN_8
#define LOW_B_GPIO_Port GPIOA
#define HIGH_BA9_Pin GPIO_PIN_9
#define HIGH_BA9_GPIO_Port GPIOA
#define LOW_C_Pin GPIO_PIN_10
#define LOW_C_GPIO_Port GPIOA
#define HIZ_SABITLEME_Pin GPIO_PIN_13
#define HIZ_SABITLEME_GPIO_Port GPIOA
#define ENABLE_Pin GPIO_PIN_12
#define ENABLE_GPIO_Port GPIOC
#define BUTTON2_Pin GPIO_PIN_3
#define BUTTON2_GPIO_Port GPIOB
#define HALL_A_Pin GPIO_PIN_6
#define HALL_A_GPIO_Port GPIOB
#define HALL_B_Pin GPIO_PIN_7
#define HALL_B_GPIO_Port GPIOB
#define HALL_C_Pin GPIO_PIN_8
#define HALL_C_GPIO_Port GPIOB

/* USER CODE BEGIN Private defines */

/* USER CODE END Private defines */

#ifdef __cplusplus
}
#endif

#endif /* __MAIN_H */
