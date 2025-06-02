## ---- include = FALSE---------------------------------------------------------
knitr::opts_chunk$set(fig.width = 6, fig.height = 5, fig.align = "center")
options(rmarkdown.html_vignette.check_title = FALSE)
load("vignettedata/vignettedata.Rdata")

## ---- fig.width=4, fig.height=3-----------------------------------------------
library(cutpointr)
roc_curve <- roc(data = suicide, x = dsi, class = suicide,
    pos_class = "yes", neg_class = "no", direction = ">=")
auc(roc_curve)
head(roc_curve)
plot_roc(roc_curve)

## -----------------------------------------------------------------------------
mcp <- multi_cutpointr(suicide, class = suicide, pos_class = "yes", 
                use_midpoints = TRUE, silent = TRUE) 
summary(mcp)

## ---- eval = FALSE, message = FALSE-------------------------------------------
#  set.seed(123)
#  opt_cut_b_g <- cutpointr(suicide, dsi, suicide, gender, boot_runs = 500)

## ---- message = FALSE---------------------------------------------------------
library(dplyr)
library(tidyr)
opt_cut_b_g |> 
  group_by(subgroup) |> 
  select(subgroup, boot) |> 
  unnest(cols = boot) |> 
  summarise(sd_oc_boot = sd(optimal_cutpoint),
            m_oc_boot  = mean(optimal_cutpoint),
            m_acc_oob  = mean(acc_oob))

## -----------------------------------------------------------------------------
cutpointr(suicide, dsi, suicide, gender, metric = youden, silent = TRUE) |> 
    add_metric(list(ppv, npv)) |> 
    select(subgroup, optimal_cutpoint, youden, ppv, npv)

## -----------------------------------------------------------------------------
roc(data = suicide, x = dsi, class = suicide, pos_class = "yes",
    neg_class = "no", direction = ">=") |> 
  add_metric(list(cohens_kappa, F1_score)) |> 
  select(x.sorted, tp, fp, tn, fn, cohens_kappa, F1_score) |> 
  head()

