## ---- include = FALSE---------------------------------------------------------
knitr::opts_chunk$set(fig.width = 6, fig.height = 5, fig.align = "center")
options(rmarkdown.html_vignette.check_title = FALSE)
load("vignettedata/vignettedata.Rdata")

## ---- fig.width=4, fig.height=3-----------------------------------------------
library(cutpointr)

set.seed(123)
opt_cut_b_g <- cutpointr(suicide, dsi, suicide, gender, boot_runs = 500)

plot_cut_boot(opt_cut_b_g)
plot_metric(opt_cut_b_g, conf_lvl = 0.9)
plot_metric_boot(opt_cut_b_g)
plot_precision_recall(opt_cut_b_g)
plot_sensitivity_specificity(opt_cut_b_g)
plot_roc(opt_cut_b_g)

## ---- fig.width=4, fig.height=3-----------------------------------------------
library(ggplot2)
p <- plot_x(opt_cut_b_g)
p + ggtitle("Distribution of dsi") + 
    theme_minimal() + 
    xlab("Depression score")

## ---- fig.width=4, fig.height=3, cache=FALSE----------------------------------
set.seed(1234)
opt_cut_b <- cutpointr(suicide, dsi, suicide, boot_runs = 500)

plot_cutpointr(opt_cut_b, xvar = cutpoints, yvar = sum_sens_spec, conf_lvl = 0.9)
plot_cutpointr(opt_cut_b, xvar = fpr, yvar = tpr, aspect_ratio = 1, conf_lvl = 0)
plot_cutpointr(opt_cut_b, xvar = cutpoint, yvar = tp, conf_lvl = 0.9) + 
    geom_point()

## ---- fig.width=4, fig.height=3-----------------------------------------------
library(dplyr)
library(tidyr)
opt_cut_b_g |> 
    select(data, subgroup) |> 
    unnest(cols = data) |> 
    ggplot(aes(x = suicide, y = dsi)) + 
    geom_boxplot(alpha = 0.3) + 
    facet_grid(~subgroup)

