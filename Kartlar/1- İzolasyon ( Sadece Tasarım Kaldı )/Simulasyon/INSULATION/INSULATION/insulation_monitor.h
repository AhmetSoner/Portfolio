#ifndef INSULATION_MONITOR_H
#define INSULATION_MONITOR_H

void insulation_measurement(
    // --PARAM ---
    const double simulation_time,
    // ---  G?R??LER ---
    const double Vadc_iso,
    const double Vadc_bus,
    // --- ÇIKI?LAR) ---
    double *SP_Enable,
    double *SN_Enable,
    double *Riso_P,
    double *Riso_N,
    int *status,
    double *V_DC_out
);

#endif