## ---- include = FALSE---------------------------------------------------------
knitr::opts_chunk$set(fig.width = 6, fig.height = 5, fig.align = "center")
options(rmarkdown.html_vignette.check_title = FALSE)

## -----------------------------------------------------------------------------
library(cutpointr)
data(suicide)
opt_cut <- cutpointr(
    data = suicide,
    x = dsi,
    class = suicide,
    method = maximize_metric,
    metric = youden,
    pos_class = "yes",
    direction = ">="
)
summary(opt_cut)

## -----------------------------------------------------------------------------
set.seed(123)
opt_cut <- cutpointr(
    data = suicide,
    x = dsi,
    class = suicide,
    method = maximize_boot_metric,
    boot_cut = 200,
    summary_func = mean,
    metric = youden,
    pos_class = "yes",
    direction = ">="
)
summary(opt_cut)

## -----------------------------------------------------------------------------
opt_cut <- cutpointr(
    data = suicide,
    x = dsi,
    class = suicide,
    method = maximize_metric,
    metric = youden,
    pos_class = "yes",
    direction = ">=",
    boot_runs = 100
)

## -----------------------------------------------------------------------------

summary(opt_cut)
opt_cut$boot[[1]] |> 
  head()

## -----------------------------------------------------------------------------
library(doParallel)
library(doRNG)
cl <- makeCluster(2) # 2 cores
registerDoParallel(cl)
registerDoRNG(12)
set.seed(123)
opt_cut <- cutpointr(
    data = suicide,
    x = dsi,
    class = suicide,
    method = maximize_boot_metric,
    boot_cut = 200,
    summary_func = mean,
    metric = youden,
    pos_class = "yes",
    direction = ">=",
    boot_runs = 100,
    allowParallel = TRUE
)
stopCluster(cl)

## -----------------------------------------------------------------------------
summary(opt_cut)
opt_cut$boot[[1]] |> 
  head()

## -----------------------------------------------------------------------------
plot(opt_cut)

