## ---- include = FALSE---------------------------------------------------------
knitr::opts_chunk$set(fig.width = 6, fig.height = 5, fig.align = "center")
options(rmarkdown.html_vignette.check_title = FALSE)
load("vignettedata/vignettedata.Rdata")

## ---- cache=TRUE--------------------------------------------------------------
library(cutpointr)
set.seed(100)
cutpointr(suicide, dsi, suicide, gender, 
          method = maximize_boot_metric,
          boot_cut = 200, summary_func = mean,
          metric = accuracy, silent = TRUE)

## -----------------------------------------------------------------------------
opt_cut <- cutpointr(suicide, dsi, suicide, gender, method = minimize_metric,
                     metric = misclassification_cost, cost_fp = 1, cost_fn = 10)

## -----------------------------------------------------------------------------
plot_metric(opt_cut)

## ---- message = FALSE---------------------------------------------------------
opt_cut <- cutpointr(suicide, dsi, suicide, gender, 
                     method = minimize_loess_metric,
                     criterion = "aicc", family = "symmetric", 
                     degree = 2, user.span = 0.7,
                     metric = misclassification_cost, cost_fp = 1, cost_fn = 10)

## -----------------------------------------------------------------------------
plot_metric(opt_cut)

## -----------------------------------------------------------------------------
library(ggplot2)
exdat <- iris
exdat <- exdat[exdat$Species != "setosa", ]
opt_cut <- cutpointr(exdat, Petal.Length, Species,
                     method = minimize_gam_metric,
                     formula = m ~ s(x.sorted, bs = "cr"),
                     metric = abs_d_sens_spec)
plot_metric(opt_cut)

## -----------------------------------------------------------------------------
opt_cut <- cutpointr(suicide, dsi, suicide, gender, 
                     method = minimize_spline_metric, spar = 0.4,
                     metric = misclassification_cost, cost_fp = 1, cost_fn = 10)
plot_metric(opt_cut)

## -----------------------------------------------------------------------------
cutpointr(suicide, dsi, suicide, gender, method = oc_youden_normal)

## -----------------------------------------------------------------------------
cutpointr(suicide, dsi, suicide, gender, method = oc_youden_kernel)

