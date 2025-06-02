## ---- include = FALSE---------------------------------------------------------
knitr::opts_chunk$set(fig.width = 6, fig.height = 5, fig.align = "center")
options(rmarkdown.html_vignette.check_title = FALSE)
load("vignettedata/vignettedata.Rdata")

## ---- eval = FALSE------------------------------------------------------------
#  mean_cut <- function(data, x, ...) {
#      oc <- mean(data[[x]])
#      return(data.frame(optimal_cutpoint = oc))
#  }

## -----------------------------------------------------------------------------
library(cutpointr)
misclassification_cost

