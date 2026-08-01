//#############################################################################
// Copyright (C) 2022 Texas Instruments Incorporated - http://www.ti.com/
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions
// are met:
//
//   Redistributions of source code must retain the above copyright
//   notice, this list of conditions and the following disclaimer.
//
//   Redistributions in binary form must reproduce the above copyright
//   notice, this list of conditions and the following disclaimer in the
//   documentation and/or other materials provided with the
//   distribution.
//
//   Neither the name of Texas Instruments Incorporated nor the names of
//   its contributors may be used to endorse or promote products derived
//   from this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
// $
//#############################################################################
/*
 * Name:    TIDA-010232-LAUNCHXL-F280049C-Example-Code
 * Version: 01.00.01.00
 * Date:    2024-02-16
 * Author:  Andreas Lechner A0235146, based on work from Juan Aparicio
 *
 * Description/Notes:
 *
 * TIDA-010232 can be connected to J1/J3/ J2/J4 (top connector) or J5/J7/ J6/J8 (bottom connector) of LAUNCHXL-F280049C
 * Set the according define in line 32/33
 *
 * Input/output mapping:                top connector           Bottom connector
 *  - RELAY_POS output:                 GPIO 30 (J4.33)         GPIO15     (J8.53)
 *  - RELAY_NEG output:                 GPIO 25 (J4.31)         GPIO32      (J8.51)
 *  - BATT input:                       ADCC2   (J3.25)         ADCC14      (J7.65)
 *  - ISO_Voltage input:                ADCB1   (J3.26)         ADCC1       (J7.66)
 *
 *  Added pseudo-simultaneous sampling of DC BUS voltage and Isolation voltage. Which results in different formulas for RisoP and RisoN than mentioned in the Design Guide
 *
 *  How to use this software:
 *  1. Uncomment the correct define for 800V or 400V version of board, BAORAD_800V or BOARD_400V
 *  2. Uncomment the correct define for usage of TOP_CONNECTOR or BOTTOM_CONNECTOR
 *  3. Connect TIDA-010232-Board to top or bottom connector of the LAUNCHXL-F280049C and un-comment the according define TOP CONNECTOR or BOTTTOM CONNECTOR (line 73/74)
 *  4. Connect DC+,DC- and PE to TIDA-010232 Board
 *  5. Start Software in Debug view
 *  6. Add variables control, r_ios_pos and r_iso_neg to the expressions window
 *  7. Enable continuous refresh in the expressions window
 *  8. Set variable control to 1 in the expressions window. This will start one iteration of the insulation resistance measurement
 *  9. Observe the measured values for r_iso_pos and r_iso_neg in the expressions window
 *
 */

// --- Includes ---
#include "driverlib.h"
#include "device.h"
#include "stdio.h"
#include "stdlib.h"
#include "math.h"
#include "ctype.h"

// --- Defines ---

//#define TOP_CONNECTOR
#define BOTTOM_CONNECTOR

//#define BORAD_400V
#define BOARD_800V



#ifdef TOP_CONNECTOR
#define GPIO_RN                 25          // GPIO output for RELAY_NEG   Upper COnnector (J1 J2 J3 J4)
#define GPIO_RP                 30          // GPIO output for RELAY_POS   Upper COnnector  (J1 J2 J3 J4)

#else
#define GPIO_RN                 32          // GPIO output for RELAY_NEG   Lower Connector (J5 J6 J7 J8)
#define GPIO_RP                 15          // GPIO output for RELAY_POS   Lower Connector (J5 J6 J7 J8)
#endif

#ifdef BOARD_800V
#define T_ACQ_DFLT              1           // Default measurement/acquisition period
#define R_PS_DFLT               271000.0     // Input series  resistance positive branch
#define R_NS_DFLT               271000.0     // Input series resistance negative branch
#define R_S_DFLT                255.0       // Current sense resistor in front of AMC3330
#define V_REF_DFLT              1.65        // Reference voltage
#define K_ADC_DFLT              2           // AMC3330 Gain Riso sensing
#define K_BATT_DFLT             2           // AMC3330 Gain Vbus sensing
#define k_DIFF2SINISO_DFLT      0.825       //Differential to single ended conversion Gain Riso measurement
#define k_DIFF2SINBATT_DFLT     1.65        //Differential to single ended conversion Gain Vbus measurement
#define R_PS_DFLT_DC            990000.0     // Input series resistance
#define R_S_DFLT_DC             910.0       // Feedback resistance
#define V_REF_DFLT_DC           0.0         // Common Mode Reference for Dif2Sing conversion Bus Monitoring
#else
#define T_ACQ_DFLT              1           // Default measurement/acquisition period
#define R_PS_DFLT               68100.0     // Input series  resistance positive branch
#define R_NS_DFLT               68100.0     // Input series resistance negative branch
#define R_S_DFLT                120.0       // Current sense resistor in front of AMC3330
#define V_REF_DFLT              1.65        // Reference voltage
#define K_ADC_DFLT              2           // AMC3330 Gain Riso sensing
#define K_BATT_DFLT             2           // AMC3330 Gain Vbus sensing
#define k_DIFF2SINISO_DFLT      0.825       //Differential to single ended conversion Gain Riso measurement
#define k_DIFF2SINBATT_DFLT     1.65        //Differential to single ended conversion Gain Vbus measurement
#define R_PS_DFLT_DC            990000.0     // Input series resistance
#define R_S_DFLT_DC             2100.0       // Feedback resistance
#define V_REF_DFLT_DC           0.0         // Common Mode Reference for Dif2Sing conversion Bus Monitoring
#endif



enum {OFF, ON};
enum {RELAY_POS, RELAY_NEG};

// --- Globals ---
double v_iso_P;            // Isolation voltage Vp
double v_iso_N;            // Isolation voltage Vn
double v_DC_P, v_DC_N;     // DC BUS voltage during Vp measurement and Vn measurement

// According ADC voltages
double v_adc_iso_pos;           // voltage at the ADC input during Vp measurement
double v_adc_iso_neg;           // voltage at the ADC input during Vn measurement
double v_adc_DC_P, v_adc_DC_N;  // voltage at the ADC for DC BUS voltage measurement during Vp measurement and Vn measurement

// Circuit parameters and coefficients for the switched in resistor divider
double r_ps = R_PS_DFLT;
double r_ns = R_NS_DFLT;
double r_s = R_S_DFLT;
double v_ref = V_REF_DFLT;
double k_adc = K_ADC_DFLT;
double k_diff2sinISO = k_DIFF2SINISO_DFLT;

// Circuit parameters and coefficients for Bus Monitoring
double r_ps_DC = R_PS_DFLT_DC;
double r_s_DC = R_S_DFLT_DC;
double v_ref_DC = V_REF_DFLT_DC;
double k_batt = K_BATT_DFLT;
double k_diff2sinBATT = k_DIFF2SINBATT_DFLT;

// Calculated insulation resistances
double r_iso_p, r_iso_n;

double t_acq = T_ACQ_DFLT;              // Acquisition time

uint16_t i;
uint16_t control =0;                    // variable to control board during runtime, set to 1 during to perform a single Riso measurement


// --- Function prototypes ---
void actuate_relay(uint16_t, uint16_t); // Function to open or close a relay. Use defined enums as parameters
void calculate_riso(void);              // Function to calculate insulation resistances out of the measured results.
void measure_voltages_VN_V_DC_N();      // Function to measure the insulation voltage Vp and DC Bus voltage when the upper switch is closed
void measure_voltages_VP_VDC_P();       // Function to measure the insulation voltage Vn and DC Bus voltage when the lower switch is closed

// --- Main ---

void main(void) {

    // --- Device initialization ---
    Device_init();                  // Initialize device clock and peripherals
    Device_initGPIO();              // Initialize GPIO and configure the GPIO pin as a push-pull output
    Interrupt_initModule();         // Initialize PIE and clear PIE registers. Disables CPU interrupts
    Interrupt_initVectorTable();    // Initialize the PIE vector table with pointers to the shell Interrupt Service Routines (ISR)

    // --- GPIO initialization ---
    GPIO_setPadConfig(DEVICE_GPIO_PIN_LED1, GPIO_PIN_TYPE_STD);     // On board red LED for debug
    GPIO_setDirectionMode(DEVICE_GPIO_PIN_LED1, GPIO_DIR_MODE_OUT);
    GPIO_setPadConfig(GPIO_RP, GPIO_PIN_TYPE_STD);                  // RELAY_POS output
    GPIO_setDirectionMode(GPIO_RP, GPIO_DIR_MODE_OUT);
    GPIO_writePin(GPIO_RP, 0);
    GPIO_setPadConfig(GPIO_RN, GPIO_PIN_TYPE_STD);                  // RELAY_NEG output
    GPIO_setDirectionMode(GPIO_RN, GPIO_DIR_MODE_OUT);
    GPIO_writePin(GPIO_RN, 0);

    // --- ADC initialization ---
    ADC_setVREF(ADCA_BASE,ADC_REFERENCE_INTERNAL,ADC_REFERENCE_3_3V);   // Use internal VREF for ADCA, ADCB, ADCC
    ADC_setVREF(ADCB_BASE,ADC_REFERENCE_INTERNAL,ADC_REFERENCE_3_3V);
    ADC_setVREF(ADCC_BASE,ADC_REFERENCE_INTERNAL,ADC_REFERENCE_3_3V);
    ADC_setPrescaler(ADCB_BASE, ADC_CLK_DIV_4_0);                       // Set ADCCLK divider to /4
    ADC_setPrescaler(ADCC_BASE, ADC_CLK_DIV_4_0);
    ADC_setInterruptPulseMode(ADCB_BASE, ADC_PULSE_END_OF_CONV);        // Set pulse positions to late
    ADC_setInterruptPulseMode(ADCC_BASE, ADC_PULSE_END_OF_CONV);
    ADC_enableConverter(ADCB_BASE);                                     // Power up ADCs
    ADC_enableConverter(ADCC_BASE);
    DEVICE_DELAY_US(1000);                                              // Wait for 1 ms for ADCs to stabilize

#ifdef TOP_CONNECTOR
    ADC_setupSOC(ADCB_BASE, ADC_SOC_NUMBER0, ADC_TRIGGER_SW_ONLY, ADC_CH_ADCIN1, 100);
    ADC_setupSOC(ADCC_BASE, ADC_SOC_NUMBER1, ADC_TRIGGER_SW_ONLY, ADC_CH_ADCIN2, 100);

    ADC_setInterruptSource(ADCB_BASE, ADC_INT_NUMBER2, ADC_SOC_NUMBER0);                // EOC of ADCB SOC1 generates interrupt
    ADC_enableInterrupt(ADCB_BASE, ADC_INT_NUMBER2);
    ADC_clearInterruptStatus(ADCB_BASE, ADC_INT_NUMBER2);

    ADC_setInterruptSource(ADCC_BASE, ADC_INT_NUMBER1, ADC_SOC_NUMBER1);                // EOC of ADCB SOC1 generates interrupt
    ADC_enableInterrupt(ADCC_BASE, ADC_INT_NUMBER1);
    ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);

#else
    ADC_setupSOC(ADCC_BASE, ADC_SOC_NUMBER0, ADC_TRIGGER_SW_ONLY, ADC_CH_ADCIN1, 100);
    ADC_setupSOC(ADCC_BASE, ADC_SOC_NUMBER1, ADC_TRIGGER_SW_ONLY, ADC_CH_ADCIN14, 100);

    ADC_setInterruptSource(ADCC_BASE, ADC_INT_NUMBER2, ADC_SOC_NUMBER0);                // EOC of ADCB SOC1 generates interrupt
    ADC_enableInterrupt(ADCC_BASE, ADC_INT_NUMBER2);
    ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER2);

    ADC_setInterruptSource(ADCC_BASE, ADC_INT_NUMBER1, ADC_SOC_NUMBER1);                // EOC of ADCB SOC1 generates interrupt
    ADC_enableInterrupt(ADCC_BASE, ADC_INT_NUMBER1);
    ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);
#endif

    EINT;   // Enable Global Interrupt (INTM)
    ERTM;   // Enable realtime interrupt (DBGM)

    actuate_relay(RELAY_POS, OFF);
    actuate_relay(RELAY_NEG, OFF);


    while(1) {

        if(control == 1){
            // --- Perform one automatic measurement ---
            actuate_relay(RELAY_NEG, OFF);
            DEVICE_DELAY_US(500);                                    // Wait 500us before switching the other relay on
            actuate_relay(RELAY_POS, ON);                            // Actuate relays

            DEVICE_DELAY_US(1000);                                   // Wait 1ms for voltages to stabilize

            measure_voltages_VP_VDC_P();

            actuate_relay(RELAY_POS, OFF);                           // Actuate relays
            DEVICE_DELAY_US(500);                                    // Wait 500us before switching the other relay on
            actuate_relay(RELAY_NEG, ON);

            DEVICE_DELAY_US(1000);                                   // Wait 1ms for voltages to stabilize
            measure_voltages_VN_V_DC_N();
            actuate_relay(RELAY_NEG, OFF);                           // Actuate relays

            calculate_riso();                                        // Calculate insulation resistances

            control =0;

        }
    }
}

void actuate_relay(uint16_t relay, uint16_t state) {
    switch (relay) {
    case RELAY_POS:
        if(state) {
            GPIO_writePin(GPIO_RP, 1);
        } else {
            GPIO_writePin(GPIO_RP, 0);
        }
        break;
    case RELAY_NEG:
        if(state) {
            GPIO_writePin(GPIO_RN, 1);
        } else {
            GPIO_writePin(GPIO_RN, 0);
        }
        break;
    default:
        break;
    }
}


void measure_voltages_VP_VDC_P() {

    uint16_t i;
    v_adc_iso_pos = 0;
    uint32_t adcRaw_VP = 0, adcRaw_DC_P = 0;

    for(i = 0; i < 20; i++) {     // Average 20 measures to eliminate some noise


#ifdef TOP_CONNECTOR
        ADC_forceSOC(ADCB_BASE, ADC_SOC_NUMBER0);
        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER1);

        while(ADC_getInterruptStatus(ADCB_BASE, ADC_INT_NUMBER2) == false) {};          // Wait for ADCB to complete
        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1) == false) {};          // Wait for ADCC to complete


        adcRaw_VP += ADC_readResult(ADCBRESULT_BASE, ADC_SOC_NUMBER0);
        adcRaw_DC_P += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER1);

        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);
        ADC_clearInterruptStatus(ADCB_BASE, ADC_INT_NUMBER2);                           // Acknowledge flags

#else
        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER0);
        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER1);

        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER2) == false) {};          // Wait for ADCB to complete
        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1) == false) {};          // Wait for ADCC to complete


        adcRaw_VP += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER0);
        adcRaw_DC_P += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER1);

        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);
        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER2);                           // Acknowledge flags
#endif
    }

    v_adc_iso_pos = (double)adcRaw_VP * 3.3 / 4096 /20;
    v_iso_P = ((r_ps + r_s) / r_s) * (( v_adc_iso_pos- v_ref) / (k_diff2sinISO * k_adc));

    v_adc_DC_P = (double)adcRaw_DC_P * 3.3 / 4096 /20;
    v_DC_P =((r_ps_DC + r_s_DC) / r_s_DC) * ((v_adc_DC_P - v_ref_DC) / (k_batt * k_diff2sinBATT));
}

void measure_voltages_VN_V_DC_N() {

    uint16_t i;
    v_adc_iso_neg = 0;
    uint32_t adcRaw_VN = 0, adcRaw_DC_N = 0;

    for(i = 0; i < 20; i++) {     // Average 20 measures to eliminate some noise

#ifdef TOP_CONNECTOR
        ADC_forceSOC(ADCB_BASE, ADC_SOC_NUMBER0);
        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER1);

        while(ADC_getInterruptStatus(ADCB_BASE, ADC_INT_NUMBER2) == false) {};          // Wait for ADCB to complete
        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1) == false) {};          // Wait for ADCC to complete


        adcRaw_VN += ADC_readResult(ADCBRESULT_BASE, ADC_SOC_NUMBER0);
        adcRaw_DC_N += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER1);

        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);
        ADC_clearInterruptStatus(ADCB_BASE, ADC_INT_NUMBER2);                           // Acknowledge flags

#else

        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER0);
        ADC_forceSOC(ADCC_BASE, ADC_SOC_NUMBER1);

        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER2) == false) {};          // Wait for ADCB to complete
        while(ADC_getInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1) == false) {};          // Wait for ADCC to complete


        adcRaw_VN += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER0);
        adcRaw_DC_N += ADC_readResult(ADCCRESULT_BASE, ADC_SOC_NUMBER1);

        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER1);
        ADC_clearInterruptStatus(ADCC_BASE, ADC_INT_NUMBER2);                           // Acknowledge flags
#endif
    }

    v_adc_iso_neg = (double)adcRaw_VN * 3.3 / 4096 /20;
    v_iso_N = ((r_ps + r_s) / r_s) * (( v_adc_iso_neg - v_ref) / (k_diff2sinISO * k_adc));

    v_adc_DC_N = (double)adcRaw_DC_N * 3.3 / 4096 /20;
    v_DC_N =((r_ps_DC + r_s_DC) / r_s_DC) * ((v_adc_DC_N - v_ref_DC) / (k_batt * k_diff2sinBATT));
}

void calculate_riso(void) {

    r_iso_n =  ((r_s + r_ns)*(r_s + r_ps)*(v_DC_N*v_DC_P + v_DC_P * v_iso_N    - v_DC_N * v_iso_P))   /(v_iso_P   *(r_ns * v_iso_N    - r_ps * v_iso_N    + v_DC_N*r_s + v_DC_N*r_ns));

    r_iso_p = -((r_s + r_ns)*(r_s + r_ps)*(v_DC_N*v_DC_P + v_DC_P*v_iso_N - v_DC_N*v_iso_P))/(v_iso_N*(r_ns*v_iso_P - r_ps*v_iso_P + v_DC_P*r_s + v_DC_P*r_ps));
}



