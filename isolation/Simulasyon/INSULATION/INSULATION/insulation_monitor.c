#include "insulation_monitor.h"
#include <math.h>

// ---  PARAMETRELER ---
#define Rst                  68100.0
#define Rinamc               120.0
#define GainDiff2Single      0.825
#define GainAmc              2.0
#define Vref                 1.65
#define Rst_dc               264500.0
#define Rinamc_dc            2480.0
#define GainDiff2Single_dc   1.65
#define Vref_dc              1.65

// --- Durum Makinesi  ---
typedef enum {
    IDLE = 0, START_MEASUREMENT_P, WAIT_STATE_1, CAPTURE_P,
    TRANSITION_DELAY, START_MEASUREMENT_N, WAIT_STATE_2, CAPTURE_N,
    CALCULATE_AND_HALT
} State_T;

#define WAIT_CYCLES 200

static State_T currentState = IDLE;
static double measured_V_P = 0.0;
static double measured_V_N = 0.0;
static int waitCounter = 0;


void insulation_measurement(
    const double simulation_time,
    const double Vadc_iso, const double Vadc_bus,
    double *SP_Enable, double *SN_Enable, double *Riso_P, double *Riso_N, int *status,
    double *V_DC_out)
{
    if (simulation_time == 0.0) {
        currentState = IDLE;
    }

    switch (currentState)
    {
        case IDLE:
            *SP_Enable = 0;
            *SN_Enable = 0;
            currentState = START_MEASUREMENT_P;
            break;
        case START_MEASUREMENT_P:
            *SP_Enable = 1;
            *SN_Enable = 0;
            waitCounter = WAIT_CYCLES;
            currentState = WAIT_STATE_1;
            break;
        case WAIT_STATE_1:
            *SP_Enable = 1;

            // V_P de?eri
            measured_V_P = ((Vadc_iso - Vref) * (Rst + Rinamc)) / ((Rinamc) * (GainDiff2Single * GainAmc));
            
            waitCounter--;
            if (waitCounter <= 0) {
                currentState = CAPTURE_P;
            }
            break;
        case CAPTURE_P:
            currentState = TRANSITION_DELAY;
            break;
        case TRANSITION_DELAY:
            *SP_Enable = 0;
            *SN_Enable = 0;
            currentState = START_MEASUREMENT_N;
            break;
        case START_MEASUREMENT_N:
            *SP_Enable = 0;
            *SN_Enable = 1;
            waitCounter = WAIT_CYCLES;
            currentState = WAIT_STATE_2;
            break;
        case WAIT_STATE_2:
            *SN_Enable = 1;

            measured_V_N = ((Vadc_iso - Vref) * (Rst + Rinamc)) / ((Rinamc) * (GainDiff2Single * GainAmc));

            waitCounter--;
            if (waitCounter <= 0) {
                currentState = CAPTURE_N;
            }
            break;
        case CAPTURE_N:
            
            currentState = CALCULATE_AND_HALT;
            break;
        case CALCULATE_AND_HALT:
            {
                double v_DC = (Vadc_bus * (Rst_dc + Rinamc_dc)) / (GainAmc * GainDiff2Single_dc * Rinamc_dc);
                
                double v_iso_P = measured_V_P;
                double v_iso_N = measured_V_N;
                
                double final_Riso_P = 0.0;
                double final_Riso_N = 0.0;

                final_Riso_P = -((Rinamc + Rst) * (v_DC + v_iso_N - v_iso_P)) / v_iso_N;
                final_Riso_N = ((Rinamc + Rst) * (v_DC + v_iso_N - v_iso_P)) / v_iso_P;
                
                *Riso_P = final_Riso_P;
                *Riso_N = final_Riso_N;
                *V_DC_out = v_DC;
                
                *SP_Enable = 0;
                *SN_Enable = 0;
            }
            break;
        default:
            currentState = IDLE;
            break;
    }
    
    *status = (int)currentState;
}