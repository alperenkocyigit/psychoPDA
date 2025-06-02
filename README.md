# 🧠 Psychometrics & Post-Data Analysis for Jamovi

[![Version](https://img.shields.io/badge/version-1.0.5-blue.svg)](https://github.com/alperenkocyigit/psychoPDA)
[![Jamovi](https://img.shields.io/badge/jamovi-1.0.8+-green.svg)](https://www.jamovi.org/)
[![R](https://img.shields.io/badge/R-package-red.svg)](https://library.jamovi.org/win64/R4.4.1-x64/psychoPDA-1.0.5.jmo)

> A comprehensive suite of tools for performing various Psychometric & Post-Data Analyses in jamovi

---

## 📋 Table of Contents

- [🎯 Features](#-features)
- [🚀 Installation](#-installation)
- [🔧 Available Tools](#-available-tools)
- [🧪 In Development](#-in-development)
- [📖 Documentation](#-documentation)
- [🛠️ Troubleshooting](#️-troubleshooting)
- [👥 Contributing](#-contributing)

---

## 🎯 Features

psychoPDA brings advanced psychometric analysis capabilities to jamovi's user-friendly interface, making sophisticated statistical methods accessible to researchers without extensive programming knowledge.

## 🔧 Available Tools

### 📊 **BinaryLogR** - Binary Logistic Regression for DIF
> **Differential Item Functioning Analysis**

- ✅ Assess DIF on dichotomously scored items using GLIM framework
- ✅ User-friendly interface for complex statistical methods
- ✅ Type-M error rate assessment (Gelman & Carlin, 2014)
- ✅ Revolutionary interpretability of DIF-flagging
- ✅ Optimized for low-powered research settings

### 🎯 **Test ROC** - Measure Diagnostics
> **Optimal Cutpoint Analysis**

- ✅ Interface to the cutpointR R-package
- ✅ Assess optimal cutpoints for psychosocial measures
- ✅ Comprehensive diagnostic capabilities
- ✅ ROC curve analysis and visualization

---

## 🧪 In Development

| Tool | Status | Description |
|------|--------|-------------|
| 📈 **Ordinal LogR** | 🔄 Testing | Ordinal logistic regression for DIF |
| 📏 **Design Analysis** | 🔄 Testing | T-Test for Mean differences & Correlations |
| 🔍 **Reliability Analysis** | 🔄 Testing | For ordinal measures |

---

## 🚀 Installation

### Method 1: From jamovi Modules Library (Recommended)

1. **Download jamovi** from [jamovi.org](https://www.jamovi.org/download.html)
2. **Open jamovi** and navigate to the modules library
3. **Search** for "PPDA" or "psychoPDA"
4. **Install** the module directly

### Method 2: From Source

```r
# Install required tools
install.packages('jmvtools', repos=c('https://repo.jamovi.org', 'https://cran.r-project.org'))

# Clone repository
git clone https://github.com/alperenkocyigit/psychoPDA.git

# Set working directory and install
setwd("path/to/psychoPDA")
jmvtools::install()
```
### Method 3: For R
```r
# Using remotes
install.packages("remotes")
library(remotes)
install_github("alperenkocyigit/psychoPDA")
```

```r
# Using renv
library(renv)
renv::install("alperenkocyigit/psychoPDA")
```

---

## 📖 Documentation

📚 **Comprehensive documentation will be available soon**

---

## 🛠️ Troubleshooting

### Common Issues

| Issue | Solution |
|-------|----------|
| 🔧 **Module not loading** | Check jamovi version (1.0.8+ required) |
| 📊 **Analysis errors** | Verify data format and missing values |
| 💾 **Installation issues** | See documentation link above |

### Need Help?

- 🐛 Report issues on [GitHub](https://github.com/alperenkocyigit/psychoPDA/issues)
- 💬 Join discussions in the issues section

---

## 👥 Contributing

We welcome contributions! Please feel free to:

- 🐛 Report bugs
- 💡 Suggest features
- 📝 Improve documentation
- 🔧 Submit pull requests

---

## 📜 License

This project is part of the jamovi ecosystem and follows open-source principles.

---

## 🙏 Acknowledgments

- Original development by Lucas Friesen
- Currently maintained by [alperenkocyigit](https://github.com/alperenkocyigit)
- Built for the jamovi statistical platform and R

---

<div align="center">
  <strong>⭐ Star this repository if you find it useful! ⭐</strong>
</div>
