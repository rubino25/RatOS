---
sidebar_position: 2
---

# Adaptive Meshing

RatOS comes with it's own adaptive meshing (functionality was previously handled by PAM by Helge Keck), similar to KAMP. When enabled and configured in your slicer, RatOS will only probe the print area and your configured probe location, potentially saving a lot of time on smaller prints on bigger printers. RatOS will keep the resolution of your mesh (probes per mm), so that you always get consistent mesh performance. Contrary to KAMP and PAM, RatOS doesn't move your prime location, instead it probes the prime location (constrained by min/max bed_mesh settings) a single time and uses the difference between the probe result and your z_offset to dynamically apply a gcode offset only for the prime macro. This ensures no collision with prime blob and the toolhead on small meshes.

## Macro configuration

To enable adaptive priming set `variable_adaptive_mesh` to `True` in your RatOS macro configuration section (if it isn't already there, add it):

| Name                   | Possible Values | Default | Description                        |
| ---------------------- | --------------- | ------- | ---------------------------------- |
| variable_adaptive_mesh | True / False    | False   | Whether to enable adaptive meshing |

:::info
If you are currently using PAM, you should delete the PAM includes from printer.cfg before proceeding. Afterwards you can delete the PAM directory and remove the PAM moonraker.conf entry.
:::

## Slicer configuration

Adaptive meshing requires that you provide print area coordinates to the START_PRINT macro, you can copy and paste the START_PRINT macro for your slicer below.

### PrusaSlicer / SuperSlicer

```ini
START_PRINT EXTRUDER_TEMP=[first_layer_temperature] BED_TEMP=[first_layer_bed_temperature] X0={first_layer_print_min[0]} Y0={first_layer_print_min[1]} X1={first_layer_print_max[0]} Y1={first_layer_print_max[1]}
```

### OrcaSlicer / SoftFever

```ini
START_PRINT EXTRUDER_TEMP=[nozzle_temperature_initial_layer] BED_TEMP=[bed_temperature_initial_layer_single] X0={first_layer_print_min[0]} Y0={first_layer_print_min[1]} X1={first_layer_print_max[0]} Y1={first_layer_print_max[1]}
```

### Ideamaker

```ini
START_PRINT EXTRUDER_TEMP={temperature_extruder1} BED_TEMP={temperature_heatbed} X0={print_pos_min_x} Y0={print_pos_min_y} X1={print_pos_max_x} Y1={print_pos_max_y}
```

### Simplify 3D V5

```ini
START_PRINT EXTRUDER_TEMP=[extruder0_temperature] BED_TEMP=[bed0_temperature] X0=[build_min_x] Y0=[build_min_y] X1=[build_max_x] Y1=[build_max_y]
```

### Cura

```ini
START_PRINT EXTRUDER_TEMP={material_print_temperature_layer_0} BED_TEMP={material_bed_temperature_layer_0} X0=%MINX% Y0=%MINY% X1=%MAXX% Y1=%MAXY%
```

## Relative reference index

RatOS Adaptive Meshing currently doesn't modify the relative reference index, it's generally not advised to use relative reference index with adaptive meshing.
