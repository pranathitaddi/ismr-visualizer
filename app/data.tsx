const mockClimateDatabase = [
  {
    "year": 1871,
    "month": 1,
    "data": {
      "nao": -0.184,
      "amo": -0.244,
      "nino": -0.016,
      "pdo": -0.158,
      "iod": -0.051,
      "anino": -0.507,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 2,
    "data": {
      "nao": -0.118,
      "amo": -0.189,
      "nino": -0.638,
      "pdo": -0.102,
      "iod": -0.108,
      "anino": -0.646,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 3,
    "data": {
      "nao": -0.1,
      "amo": -0.078,
      "nino": -0.336,
      "pdo": -0.028,
      "iod": 0.016,
      "anino": -0.093,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 4,
    "data": {
      "nao": 0.005,
      "amo": -0.008,
      "nino": -0.303,
      "pdo": -0.126,
      "iod": -0.133,
      "anino": -0.198,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 5,
    "data": {
      "nao": -0.058,
      "amo": -0.02,
      "nino": -0.387,
      "pdo": -0.06,
      "iod": -0.116,
      "anino": -0.096,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 6,
    "data": {
      "nao": -0.07,
      "amo": -0.002,
      "nino": -0.4,
      "pdo": 0.009,
      "iod": -0.166,
      "anino": -0.027,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 7,
    "data": {
      "nao": -0.084,
      "amo": -0.02,
      "nino": -0.367,
      "pdo": -0.075,
      "iod": -0.282,
      "anino": -0.113,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 8,
    "data": {
      "nao": -0.113,
      "amo": -0.106,
      "nino": -0.116,
      "pdo": -0.255,
      "iod": -0.136,
      "anino": -0.304,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 9,
    "data": {
      "nao": -0.131,
      "amo": -0.163,
      "nino": -0.392,
      "pdo": -0.184,
      "iod": 0.089,
      "anino": -0.403,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 10,
    "data": {
      "nao": -0.023,
      "amo": -0.021,
      "nino": -0.339,
      "pdo": -0.042,
      "iod": -0.187,
      "anino": -0.052,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 11,
    "data": {
      "nao": -0.022,
      "amo": -0.064,
      "nino": -1.114,
      "pdo": 0.046,
      "iod": -0.016,
      "anino": -0.227,
      "ismr": -0.52
    }
  },
  {
    "year": 1871,
    "month": 12,
    "data": {
      "nao": -0.068,
      "amo": -0.089,
      "nino": -0.58,
      "pdo": 0.028,
      "iod": -0.149,
      "anino": -0.134,
      "ismr": -0.52
    }
  },
  {
    "year": 1872,
    "month": 1,
    "data": {
      "nao": -0.105,
      "amo": -0.19,
      "nino": -0.462,
      "pdo": -0.014,
      "iod": 0.184,
      "anino": -0.829,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 2,
    "data": {
      "nao": -0.063,
      "amo": -0.099,
      "nino": -0.185,
      "pdo": 0.039,
      "iod": 0.326,
      "anino": -0.428,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 3,
    "data": {
      "nao": -0.003,
      "amo": -0.085,
      "nino": -0.265,
      "pdo": 0.043,
      "iod": 0.074,
      "anino": -0.509,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 4,
    "data": {
      "nao": -0.087,
      "amo": -0.178,
      "nino": -0.216,
      "pdo": 0.052,
      "iod": 0.079,
      "anino": -0.656,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 5,
    "data": {
      "nao": -0.077,
      "amo": -0.128,
      "nino": -0.444,
      "pdo": -0.048,
      "iod": -0.2,
      "anino": -0.304,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 6,
    "data": {
      "nao": -0.005,
      "amo": -0.042,
      "nino": -0.044,
      "pdo": -0.037,
      "iod": -0.317,
      "anino": -0.242,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 7,
    "data": {
      "nao": -0.006,
      "amo": -0.064,
      "nino": -0.216,
      "pdo": 0.002,
      "iod": -0.047,
      "anino": -0.338,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 8,
    "data": {
      "nao": -0.048,
      "amo": -0.054,
      "nino": -0.419,
      "pdo": -0.129,
      "iod": -0.089,
      "anino": -0.157,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 9,
    "data": {
      "nao": -0.031,
      "amo": -0.041,
      "nino": -0.416,
      "pdo": -0.193,
      "iod": -0.067,
      "anino": -0.148,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 10,
    "data": {
      "nao": -0.181,
      "amo": -0.207,
      "nino": -0.035,
      "pdo": -0.157,
      "iod": -0.064,
      "anino": -0.39,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 11,
    "data": {
      "nao": -0.126,
      "amo": -0.15,
      "nino": -0.647,
      "pdo": -0.087,
      "iod": 0.21,
      "anino": -0.375,
      "ismr": 15.689
    }
  },
  {
    "year": 1872,
    "month": 12,
    "data": {
      "nao": -0.091,
      "amo": -0.118,
      "nino": 0.111,
      "pdo": -0.036,
      "iod": 0.286,
      "anino": -0.409,
      "ismr": 15.689
    }
  },
  {
    "year": 1873,
    "month": 1,
    "data": {
      "nao": -0.058,
      "amo": -0.112,
      "nino": -0.85,
      "pdo": 0.008,
      "iod": 0.068,
      "anino": -0.515,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 2,
    "data": {
      "nao": -0.075,
      "amo": -0.152,
      "nino": -0.933,
      "pdo": 0.112,
      "iod": 0.233,
      "anino": -0.559,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 3,
    "data": {
      "nao": -0.033,
      "amo": -0.127,
      "nino": -1.212,
      "pdo": 0.099,
      "iod": 0.031,
      "anino": -0.759,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 4,
    "data": {
      "nao": -0.083,
      "amo": -0.097,
      "nino": -0.983,
      "pdo": -0.014,
      "iod": -0.141,
      "anino": -0.446,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 5,
    "data": {
      "nao": -0.164,
      "amo": -0.139,
      "nino": -0.349,
      "pdo": -0.144,
      "iod": 0.028,
      "anino": -0.27,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 6,
    "data": {
      "nao": -0.238,
      "amo": -0.198,
      "nino": -0.598,
      "pdo": -0.074,
      "iod": 0.172,
      "anino": -0.491,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 7,
    "data": {
      "nao": -0.219,
      "amo": -0.168,
      "nino": -0.895,
      "pdo": -0.036,
      "iod": -0.043,
      "anino": -0.377,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 8,
    "data": {
      "nao": -0.15,
      "amo": -0.181,
      "nino": -0.551,
      "pdo": -0.108,
      "iod": -0.166,
      "anino": -0.402,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 9,
    "data": {
      "nao": -0.112,
      "amo": -0.117,
      "nino": -0.013,
      "pdo": -0.19,
      "iod": -0.007,
      "anino": -0.174,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 10,
    "data": {
      "nao": -0.203,
      "amo": -0.25,
      "nino": -0.452,
      "pdo": -0.171,
      "iod": 0.264,
      "anino": -0.587,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 11,
    "data": {
      "nao": -0.206,
      "amo": -0.238,
      "nino": -0.902,
      "pdo": -0.159,
      "iod": 0.002,
      "anino": -0.576,
      "ismr": -23.377
    }
  },
  {
    "year": 1873,
    "month": 12,
    "data": {
      "nao": -0.149,
      "amo": -0.207,
      "nino": -0.999,
      "pdo": -0.123,
      "iod": 0.096,
      "anino": -0.519,
      "ismr": -23.377
    }
  },
  {
    "year": 1874,
    "month": 1,
    "data": {
      "nao": -0.049,
      "amo": -0.086,
      "nino": -0.773,
      "pdo": -0.058,
      "iod": -0.134,
      "anino": -0.357,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 2,
    "data": {
      "nao": -0.089,
      "amo": -0.156,
      "nino": -1.204,
      "pdo": -0.1,
      "iod": -0.221,
      "anino": -0.615,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 3,
    "data": {
      "nao": -0.041,
      "amo": -0.091,
      "nino": -0.829,
      "pdo": -0.118,
      "iod": -0.46,
      "anino": -0.364,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 4,
    "data": {
      "nao": -0.08,
      "amo": -0.109,
      "nino": -0.462,
      "pdo": -0.216,
      "iod": -0.037,
      "anino": -0.341,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 5,
    "data": {
      "nao": -0.17,
      "amo": -0.146,
      "nino": -0.435,
      "pdo": -0.141,
      "iod": -0.049,
      "anino": -0.309,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 6,
    "data": {
      "nao": -0.118,
      "amo": -0.101,
      "nino": -0.651,
      "pdo": -0.087,
      "iod": -0.293,
      "anino": -0.206,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 7,
    "data": {
      "nao": -0.142,
      "amo": -0.074,
      "nino": -0.954,
      "pdo": -0.089,
      "iod": -0.176,
      "anino": -0.164,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 8,
    "data": {
      "nao": -0.21,
      "amo": -0.224,
      "nino": -1.086,
      "pdo": -0.179,
      "iod": -0.354,
      "anino": -0.517,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 9,
    "data": {
      "nao": -0.102,
      "amo": -0.098,
      "nino": -0.753,
      "pdo": -0.203,
      "iod": -0.346,
      "anino": -0.27,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 10,
    "data": {
      "nao": -0.124,
      "amo": -0.163,
      "nino": -0.893,
      "pdo": -0.06,
      "iod": -0.062,
      "anino": -0.319,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 11,
    "data": {
      "nao": -0.089,
      "amo": -0.117,
      "nino": -1.222,
      "pdo": 0.106,
      "iod": -0.02,
      "anino": -0.256,
      "ismr": 30.933
    }
  },
  {
    "year": 1874,
    "month": 12,
    "data": {
      "nao": -0.035,
      "amo": -0.046,
      "nino": -0.626,
      "pdo": 0.062,
      "iod": -0.049,
      "anino": -0.148,
      "ismr": 30.933
    }
  },
  {
    "year": 1875,
    "month": 1,
    "data": {
      "nao": -0.086,
      "amo": -0.141,
      "nino": -0.757,
      "pdo": -0.032,
      "iod": 0.003,
      "anino": -0.598,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 2,
    "data": {
      "nao": -0.021,
      "amo": -0.012,
      "nino": -0.355,
      "pdo": 0.103,
      "iod": -0.04,
      "anino": -0.075,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 3,
    "data": {
      "nao": -0.1,
      "amo": -0.119,
      "nino": -0.554,
      "pdo": 0.029,
      "iod": 0.082,
      "anino": -0.568,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 4,
    "data": {
      "nao": -0.1,
      "amo": -0.117,
      "nino": -0.751,
      "pdo": -0.064,
      "iod": 0.18,
      "anino": -0.489,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 5,
    "data": {
      "nao": -0.052,
      "amo": -0.047,
      "nino": -0.847,
      "pdo": 0.03,
      "iod": 0.116,
      "anino": -0.451,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 6,
    "data": {
      "nao": -0.086,
      "amo": -0.068,
      "nino": -0.712,
      "pdo": -0.078,
      "iod": -0.288,
      "anino": -0.262,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 7,
    "data": {
      "nao": -0.166,
      "amo": -0.161,
      "nino": -0.59,
      "pdo": 0.104,
      "iod": 0.076,
      "anino": -0.307,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 8,
    "data": {
      "nao": -0.037,
      "amo": -0.109,
      "nino": -0.937,
      "pdo": 0.06,
      "iod": 0.062,
      "anino": -0.421,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 9,
    "data": {
      "nao": 0.019,
      "amo": -0.006,
      "nino": -0.816,
      "pdo": -0.063,
      "iod": -0.119,
      "anino": -0.118,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 10,
    "data": {
      "nao": -0.104,
      "amo": -0.207,
      "nino": -1.291,
      "pdo": -0.113,
      "iod": -0.428,
      "anino": -0.787,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 11,
    "data": {
      "nao": -0.044,
      "amo": -0.079,
      "nino": -1.476,
      "pdo": -0.023,
      "iod": -0.328,
      "anino": -0.331,
      "ismr": 19.742
    }
  },
  {
    "year": 1875,
    "month": 12,
    "data": {
      "nao": -0.195,
      "amo": -0.245,
      "nino": -1.186,
      "pdo": -0.134,
      "iod": -0.471,
      "anino": -0.605,
      "ismr": 19.742
    }
  },
  {
    "year": 1876,
    "month": 1,
    "data": {
      "nao": -0.129,
      "amo": -0.165,
      "nino": -0.261,
      "pdo": 0.093,
      "iod": -0.066,
      "anino": -0.24,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 2,
    "data": {
      "nao": -0.065,
      "amo": -0.118,
      "nino": -0.593,
      "pdo": -0.006,
      "iod": -0.311,
      "anino": -0.368,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 3,
    "data": {
      "nao": -0.107,
      "amo": -0.117,
      "nino": -0.272,
      "pdo": 0.153,
      "iod": -0.128,
      "anino": -0.267,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 4,
    "data": {
      "nao": -0.099,
      "amo": -0.112,
      "nino": -0.503,
      "pdo": 0.086,
      "iod": -0.37,
      "anino": -0.07,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 5,
    "data": {
      "nao": -0.095,
      "amo": -0.146,
      "nino": -0.455,
      "pdo": 0.1,
      "iod": -0.291,
      "anino": -0.407,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 6,
    "data": {
      "nao": -0.061,
      "amo": -0.072,
      "nino": -0.625,
      "pdo": 0.053,
      "iod": -0.108,
      "anino": -0.127,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 7,
    "data": {
      "nao": -0.042,
      "amo": -0.053,
      "nino": -0.558,
      "pdo": 0.127,
      "iod": -0.397,
      "anino": -0.094,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 8,
    "data": {
      "nao": -0.044,
      "amo": -0.059,
      "nino": -0.826,
      "pdo": -0.067,
      "iod": -0.076,
      "anino": -0.277,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 9,
    "data": {
      "nao": -0.029,
      "amo": -0.04,
      "nino": -0.869,
      "pdo": 0.084,
      "iod": 0.045,
      "anino": -0.109,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 10,
    "data": {
      "nao": -0.031,
      "amo": -0.021,
      "nino": -0.138,
      "pdo": -0.021,
      "iod": -0.12,
      "anino": 0.089,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 11,
    "data": {
      "nao": -0.092,
      "amo": -0.107,
      "nino": 0.127,
      "pdo": -0.07,
      "iod": -0.21,
      "anino": -0.203,
      "ismr": -18.249
    }
  },
  {
    "year": 1876,
    "month": 12,
    "data": {
      "nao": -0.072,
      "amo": -0.1,
      "nino": 0.152,
      "pdo": 0.128,
      "iod": 0.051,
      "anino": -0.163,
      "ismr": -18.249
    }
  },
  {
    "year": 1877,
    "month": 1,
    "data": {
      "nao": 0.02,
      "amo": -0.021,
      "nino": 0.547,
      "pdo": 0.063,
      "iod": 0.036,
      "anino": -0.019,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 2,
    "data": {
      "nao": 0.072,
      "amo": 0.114,
      "nino": 0.548,
      "pdo": -0.059,
      "iod": 0.144,
      "anino": 0.42,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 3,
    "data": {
      "nao": 0.043,
      "amo": 0.07,
      "nino": 0.244,
      "pdo": 0.029,
      "iod": -0.018,
      "anino": 0.277,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 4,
    "data": {
      "nao": -0.006,
      "amo": 0.042,
      "nino": 0.587,
      "pdo": 0.11,
      "iod": -0.05,
      "anino": 0.458,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 5,
    "data": {
      "nao": -0.016,
      "amo": 0.061,
      "nino": 0.023,
      "pdo": 0.116,
      "iod": -0.49,
      "anino": 0.392,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 6,
    "data": {
      "nao": -0.064,
      "amo": 0.028,
      "nino": 0.503,
      "pdo": -0.091,
      "iod": -0.25,
      "anino": 0.273,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 7,
    "data": {
      "nao": -0.055,
      "amo": 0.037,
      "nino": 1.049,
      "pdo": -0.152,
      "iod": 0.382,
      "anino": 0.229,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 8,
    "data": {
      "nao": -0.028,
      "amo": 0.078,
      "nino": 1.361,
      "pdo": -0.113,
      "iod": 0.546,
      "anino": 0.307,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 9,
    "data": {
      "nao": -0.016,
      "amo": 0.105,
      "nino": 1.605,
      "pdo": -0.12,
      "iod": 0.716,
      "anino": 0.438,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 10,
    "data": {
      "nao": -0.112,
      "amo": -0.143,
      "nino": -0.01,
      "pdo": -0.033,
      "iod": -0.021,
      "anino": -0.218,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 11,
    "data": {
      "nao": -0.075,
      "amo": -0.048,
      "nino": 0.281,
      "pdo": -0.084,
      "iod": 0.044,
      "anino": 0.278,
      "ismr": -61.664
    }
  },
  {
    "year": 1877,
    "month": 12,
    "data": {
      "nao": 0.038,
      "amo": 0.042,
      "nino": 0.309,
      "pdo": -0.002,
      "iod": 0.062,
      "anino": 0.268,
      "ismr": -61.664
    }
  },
  {
    "year": 1878,
    "month": 1,
    "data": {
      "nao": 0.087,
      "amo": 0.133,
      "nino": 1.836,
      "pdo": -0.182,
      "iod": -0.235,
      "anino": 0.312,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 2,
    "data": {
      "nao": 0.132,
      "amo": 0.21,
      "nino": 1.879,
      "pdo": -0.099,
      "iod": -0.275,
      "anino": 0.554,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 3,
    "data": {
      "nao": 0.052,
      "amo": 0.176,
      "nino": 1.46,
      "pdo": -0.142,
      "iod": -0.136,
      "anino": 0.541,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 4,
    "data": {
      "nao": 0.18,
      "amo": 0.364,
      "nino": 0.792,
      "pdo": -0.042,
      "iod": -0.043,
      "anino": 1.08,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 5,
    "data": {
      "nao": 0.063,
      "amo": 0.202,
      "nino": 0.825,
      "pdo": -0.169,
      "iod": -0.079,
      "anino": 0.827,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 6,
    "data": {
      "nao": 0.144,
      "amo": 0.266,
      "nino": 1.038,
      "pdo": -0.168,
      "iod": 0.043,
      "anino": 0.686,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 7,
    "data": {
      "nao": 0.079,
      "amo": 0.15,
      "nino": 0.715,
      "pdo": -0.263,
      "iod": 0.147,
      "anino": 0.505,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 8,
    "data": {
      "nao": 0.105,
      "amo": 0.138,
      "nino": 0.198,
      "pdo": -0.261,
      "iod": 0.048,
      "anino": 0.261,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 9,
    "data": {
      "nao": 0.081,
      "amo": 0.083,
      "nino": -0.172,
      "pdo": -0.101,
      "iod": 0.185,
      "anino": 0.166,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 10,
    "data": {
      "nao": 0.009,
      "amo": 0.068,
      "nino": 2.011,
      "pdo": -0.18,
      "iod": 0.929,
      "anino": 0.358,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 11,
    "data": {
      "nao": 0.089,
      "amo": 0.136,
      "nino": 1.801,
      "pdo": -0.123,
      "iod": 0.714,
      "anino": 0.279,
      "ismr": 31.37
    }
  },
  {
    "year": 1878,
    "month": 12,
    "data": {
      "nao": 0.063,
      "amo": 0.117,
      "nino": 1.785,
      "pdo": -0.085,
      "iod": 0.459,
      "anino": 0.322,
      "ismr": 31.37
    }
  },
  {
    "year": 1879,
    "month": 1,
    "data": {
      "nao": -0.012,
      "amo": 0.06,
      "nino": -0.054,
      "pdo": 0.04,
      "iod": 0.043,
      "anino": 0.46,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 2,
    "data": {
      "nao": 0.041,
      "amo": 0.118,
      "nino": -0.145,
      "pdo": 0.121,
      "iod": -0.293,
      "anino": 0.527,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 3,
    "data": {
      "nao": -0.048,
      "amo": -0.019,
      "nino": -0.277,
      "pdo": 0.045,
      "iod": -0.177,
      "anino": 0.146,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 4,
    "data": {
      "nao": -0.095,
      "amo": -0.047,
      "nino": -0.237,
      "pdo": -0.202,
      "iod": -0.235,
      "anino": 0.11,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 5,
    "data": {
      "nao": -0.044,
      "amo": 0.024,
      "nino": -0.326,
      "pdo": -0.182,
      "iod": -0.272,
      "anino": 0.443,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 6,
    "data": {
      "nao": -0.129,
      "amo": -0.044,
      "nino": -0.611,
      "pdo": -0.086,
      "iod": -0.364,
      "anino": 0.228,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 7,
    "data": {
      "nao": -0.11,
      "amo": -0.068,
      "nino": -0.57,
      "pdo": 0.017,
      "iod": -0.189,
      "anino": 0.16,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 8,
    "data": {
      "nao": -0.105,
      "amo": -0.098,
      "nino": -0.462,
      "pdo": -0.049,
      "iod": -0.496,
      "anino": 0.069,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 9,
    "data": {
      "nao": -0.015,
      "amo": -0.084,
      "nino": -0.449,
      "pdo": -0.204,
      "iod": -0.367,
      "anino": -0.296,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 10,
    "data": {
      "nao": -0.004,
      "amo": -0.007,
      "nino": -0.095,
      "pdo": -0.205,
      "iod": -0.148,
      "anino": 0.117,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 11,
    "data": {
      "nao": 0.073,
      "amo": 0.116,
      "nino": 0.028,
      "pdo": -0.044,
      "iod": -0.05,
      "anino": 0.579,
      "ismr": 11.805
    }
  },
  {
    "year": 1879,
    "month": 12,
    "data": {
      "nao": 0.043,
      "amo": 0.105,
      "nino": -0.396,
      "pdo": -0.02,
      "iod": -0.114,
      "anino": 0.565,
      "ismr": 11.805
    }
  },
  {
    "year": 1880,
    "month": 1,
    "data": {
      "nao": -0.067,
      "amo": -0.101,
      "nino": -1.82,
      "pdo": 0.021,
      "iod": -0.436,
      "anino": -0.397,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 2,
    "data": {
      "nao": -0.073,
      "amo": -0.081,
      "nino": -0.661,
      "pdo": -0.001,
      "iod": -0.467,
      "anino": -0.294,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 3,
    "data": {
      "nao": -0.014,
      "amo": 0.007,
      "nino": -0.516,
      "pdo": -0.02,
      "iod": -0.421,
      "anino": -0.057,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 4,
    "data": {
      "nao": 0.008,
      "amo": -0.003,
      "nino": -0.464,
      "pdo": 0.017,
      "iod": -0.109,
      "anino": -0.095,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 5,
    "data": {
      "nao": -0.111,
      "amo": -0.164,
      "nino": -0.694,
      "pdo": 0.052,
      "iod": -0.23,
      "anino": -0.416,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 6,
    "data": {
      "nao": -0.054,
      "amo": -0.091,
      "nino": -0.416,
      "pdo": 0.119,
      "iod": -0.283,
      "anino": -0.235,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 7,
    "data": {
      "nao": 0.049,
      "amo": 0.012,
      "nino": -0.704,
      "pdo": -0.008,
      "iod": -0.681,
      "anino": -0.333,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 8,
    "data": {
      "nao": 0.018,
      "amo": -0.021,
      "nino": -0.116,
      "pdo": -0.273,
      "iod": -0.175,
      "anino": -0.273,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 9,
    "data": {
      "nao": 0.017,
      "amo": -0.049,
      "nino": -0.669,
      "pdo": -0.395,
      "iod": -0.452,
      "anino": -0.388,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 10,
    "data": {
      "nao": 0.029,
      "amo": 0.001,
      "nino": -0.987,
      "pdo": -0.046,
      "iod": -0.442,
      "anino": -0.117,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 11,
    "data": {
      "nao": -0.086,
      "amo": -0.037,
      "nino": -1.462,
      "pdo": -0.064,
      "iod": -0.288,
      "anino": 0.113,
      "ismr": -7.611
    }
  },
  {
    "year": 1880,
    "month": 12,
    "data": {
      "nao": -0.06,
      "amo": -0.068,
      "nino": -1.55,
      "pdo": 0.02,
      "iod": -0.865,
      "anino": -0.146,
      "ismr": -7.611
    }
  },
  {
    "year": 1881,
    "month": 1,
    "data": {
      "nao": 0.02,
      "amo": 0.089,
      "nino": 0.778,
      "pdo": 0.024,
      "iod": -0.281,
      "anino": 0.386,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 2,
    "data": {
      "nao": 0.003,
      "amo": 0.071,
      "nino": 0.454,
      "pdo": 0.034,
      "iod": -0.048,
      "anino": 0.433,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 3,
    "data": {
      "nao": -0.043,
      "amo": 0.1,
      "nino": 0.285,
      "pdo": 0.024,
      "iod": -0.264,
      "anino": 0.646,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 4,
    "data": {
      "nao": -0.11,
      "amo": 0.105,
      "nino": 0.369,
      "pdo": 0.073,
      "iod": 0.117,
      "anino": 0.608,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 5,
    "data": {
      "nao": -0.26,
      "amo": 0.018,
      "nino": 0.11,
      "pdo": -0.013,
      "iod": 0.049,
      "anino": 0.288,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 6,
    "data": {
      "nao": -0.243,
      "amo": 0.035,
      "nino": -0.123,
      "pdo": -0.104,
      "iod": 0.053,
      "anino": 0.352,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 7,
    "data": {
      "nao": -0.291,
      "amo": -0.083,
      "nino": 0.207,
      "pdo": -0.087,
      "iod": -0.024,
      "anino": 0.079,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 8,
    "data": {
      "nao": -0.124,
      "amo": -0.066,
      "nino": 0.008,
      "pdo": -0.144,
      "iod": 0.125,
      "anino": 0.217,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 9,
    "data": {
      "nao": -0.089,
      "amo": -0.066,
      "nino": 0.234,
      "pdo": -0.179,
      "iod": 0.016,
      "anino": 0.186,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 10,
    "data": {
      "nao": -0.015,
      "amo": -0.027,
      "nino": -0.259,
      "pdo": -0.221,
      "iod": -0.359,
      "anino": -0.052,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 11,
    "data": {
      "nao": -0.045,
      "amo": -0.066,
      "nino": 0.015,
      "pdo": -0.091,
      "iod": -0.199,
      "anino": -0.205,
      "ismr": 2.698
    }
  },
  {
    "year": 1881,
    "month": 12,
    "data": {
      "nao": -0.055,
      "amo": -0.082,
      "nino": 0.851,
      "pdo": -0.032,
      "iod": -0.049,
      "anino": -0.187,
      "ismr": 2.698
    }
  },
  {
    "year": 1882,
    "month": 1,
    "data": {
      "nao": -0.041,
      "amo": -0.062,
      "nino": -0.624,
      "pdo": -0.09,
      "iod": -0.149,
      "anino": -0.332,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 2,
    "data": {
      "nao": -0.053,
      "amo": -0.067,
      "nino": -0.336,
      "pdo": -0.021,
      "iod": -0.264,
      "anino": -0.241,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 3,
    "data": {
      "nao": -0.018,
      "amo": 0.002,
      "nino": -0.268,
      "pdo": 0.021,
      "iod": -0.191,
      "anino": -0.104,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 4,
    "data": {
      "nao": -0.091,
      "amo": -0.06,
      "nino": -0.1,
      "pdo": -0.118,
      "iod": -0.234,
      "anino": -0.194,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 5,
    "data": {
      "nao": -0.164,
      "amo": -0.156,
      "nino": -0.056,
      "pdo": -0.177,
      "iod": -0.208,
      "anino": -0.308,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 6,
    "data": {
      "nao": -0.24,
      "amo": -0.195,
      "nino": -0.269,
      "pdo": -0.334,
      "iod": -0.278,
      "anino": -0.37,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 7,
    "data": {
      "nao": -0.193,
      "amo": -0.182,
      "nino": -0.514,
      "pdo": -0.119,
      "iod": -0.151,
      "anino": -0.413,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 8,
    "data": {
      "nao": -0.188,
      "amo": -0.196,
      "nino": -0.598,
      "pdo": -0.099,
      "iod": -0.366,
      "anino": -0.255,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 9,
    "data": {
      "nao": -0.163,
      "amo": -0.192,
      "nino": -0.339,
      "pdo": -0.165,
      "iod": -0.038,
      "anino": -0.272,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 10,
    "data": {
      "nao": -0.071,
      "amo": -0.069,
      "nino": -0.319,
      "pdo": -0.217,
      "iod": 0.042,
      "anino": 0.034,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 11,
    "data": {
      "nao": -0.214,
      "amo": -0.195,
      "nino": -0.372,
      "pdo": -0.131,
      "iod": -0.124,
      "anino": -0.145,
      "ismr": 13.108
    }
  },
  {
    "year": 1882,
    "month": 12,
    "data": {
      "nao": -0.103,
      "amo": -0.144,
      "nino": -0.789,
      "pdo": -0.1,
      "iod": -0.399,
      "anino": -0.418,
      "ismr": 13.108
    }
  },
  {
    "year": 1883,
    "month": 1,
    "data": {
      "nao": -0.08,
      "amo": -0.152,
      "nino": -0.536,
      "pdo": -0.138,
      "iod": -0.252,
      "anino": -0.39,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 2,
    "data": {
      "nao": -0.082,
      "amo": -0.185,
      "nino": -0.323,
      "pdo": -0.104,
      "iod": 0.055,
      "anino": -0.533,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 3,
    "data": {
      "nao": -0.132,
      "amo": -0.189,
      "nino": 0.276,
      "pdo": -0.145,
      "iod": -0.169,
      "anino": -0.352,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 4,
    "data": {
      "nao": -0.164,
      "amo": -0.166,
      "nino": 0.258,
      "pdo": -0.053,
      "iod": -0.054,
      "anino": -0.29,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 5,
    "data": {
      "nao": -0.265,
      "amo": -0.233,
      "nino": 0.284,
      "pdo": -0.185,
      "iod": -0.341,
      "anino": -0.366,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 6,
    "data": {
      "nao": -0.185,
      "amo": -0.136,
      "nino": 0.202,
      "pdo": 0.007,
      "iod": 0.264,
      "anino": -0.315,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 7,
    "data": {
      "nao": -0.102,
      "amo": -0.129,
      "nino": 0.109,
      "pdo": -0.014,
      "iod": 0.065,
      "anino": -0.238,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 8,
    "data": {
      "nao": -0.103,
      "amo": -0.133,
      "nino": 0.294,
      "pdo": 0.201,
      "iod": 0.099,
      "anino": -0.068,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 9,
    "data": {
      "nao": -0.162,
      "amo": -0.179,
      "nino": 0.01,
      "pdo": -0.007,
      "iod": -0.042,
      "anino": -0.221,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 10,
    "data": {
      "nao": -0.103,
      "amo": -0.152,
      "nino": -0.518,
      "pdo": -0.095,
      "iod": -0.08,
      "anino": -0.277,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 11,
    "data": {
      "nao": -0.074,
      "amo": -0.084,
      "nino": -0.687,
      "pdo": -0.012,
      "iod": -0.242,
      "anino": -0.05,
      "ismr": -0.283
    }
  },
  {
    "year": 1883,
    "month": 12,
    "data": {
      "nao": -0.051,
      "amo": -0.108,
      "nino": -0.677,
      "pdo": -0.058,
      "iod": -0.182,
      "anino": -0.267,
      "ismr": -0.283
    }
  },
  {
    "year": 1884,
    "month": 1,
    "data": {
      "nao": -0.09,
      "amo": -0.142,
      "nino": -0.493,
      "pdo": -0.173,
      "iod": -0.243,
      "anino": -0.42,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 2,
    "data": {
      "nao": -0.062,
      "amo": -0.132,
      "nino": 0.391,
      "pdo": -0.046,
      "iod": 0.031,
      "anino": -0.589,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 3,
    "data": {
      "nao": -0.085,
      "amo": -0.147,
      "nino": -0.078,
      "pdo": -0.084,
      "iod": -0.122,
      "anino": -0.496,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 4,
    "data": {
      "nao": -0.167,
      "amo": -0.194,
      "nino": 0.133,
      "pdo": -0.136,
      "iod": -0.051,
      "anino": -0.47,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 5,
    "data": {
      "nao": -0.148,
      "amo": -0.119,
      "nino": 0.304,
      "pdo": -0.111,
      "iod": 0.401,
      "anino": -0.338,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 6,
    "data": {
      "nao": -0.24,
      "amo": -0.172,
      "nino": 0.024,
      "pdo": -0.178,
      "iod": 0.03,
      "anino": -0.336,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 7,
    "data": {
      "nao": -0.292,
      "amo": -0.212,
      "nino": -0.039,
      "pdo": -0.393,
      "iod": 0.256,
      "anino": -0.42,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 8,
    "data": {
      "nao": -0.231,
      "amo": -0.193,
      "nino": 0.21,
      "pdo": -0.516,
      "iod": 0.036,
      "anino": -0.205,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 9,
    "data": {
      "nao": -0.255,
      "amo": -0.27,
      "nino": 0.562,
      "pdo": -0.632,
      "iod": -0.12,
      "anino": -0.306,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 10,
    "data": {
      "nao": -0.124,
      "amo": -0.184,
      "nino": -0.141,
      "pdo": -0.327,
      "iod": -0.123,
      "anino": -0.345,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 11,
    "data": {
      "nao": -0.105,
      "amo": -0.16,
      "nino": -0.394,
      "pdo": -0.205,
      "iod": -0.12,
      "anino": -0.408,
      "ismr": 20.601
    }
  },
  {
    "year": 1884,
    "month": 12,
    "data": {
      "nao": -0.058,
      "amo": -0.091,
      "nino": -0.558,
      "pdo": -0.015,
      "iod": -0.339,
      "anino": -0.275,
      "ismr": 20.601
    }
  },
  {
    "year": 1885,
    "month": 1,
    "data": {
      "nao": -0.128,
      "amo": -0.143,
      "nino": 0.234,
      "pdo": -0.2,
      "iod": -0.263,
      "anino": -0.225,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 2,
    "data": {
      "nao": -0.089,
      "amo": -0.099,
      "nino": 0.067,
      "pdo": -0.196,
      "iod": -0.189,
      "anino": -0.125,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 3,
    "data": {
      "nao": -0.096,
      "amo": -0.117,
      "nino": 0.102,
      "pdo": -0.218,
      "iod": 0.179,
      "anino": -0.279,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 4,
    "data": {
      "nao": -0.152,
      "amo": -0.211,
      "nino": -0.073,
      "pdo": -0.217,
      "iod": -0.139,
      "anino": -0.661,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 5,
    "data": {
      "nao": -0.16,
      "amo": -0.183,
      "nino": 0.142,
      "pdo": -0.286,
      "iod": -0.094,
      "anino": -0.533,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 6,
    "data": {
      "nao": -0.204,
      "amo": -0.178,
      "nino": 0.268,
      "pdo": -0.201,
      "iod": -0.213,
      "anino": -0.33,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 7,
    "data": {
      "nao": -0.264,
      "amo": -0.215,
      "nino": -0.069,
      "pdo": -0.093,
      "iod": -0.021,
      "anino": -0.409,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 8,
    "data": {
      "nao": -0.21,
      "amo": -0.136,
      "nino": 0.119,
      "pdo": -0.029,
      "iod": 0.103,
      "anino": -0.149,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 9,
    "data": {
      "nao": -0.158,
      "amo": -0.123,
      "nino": 0.468,
      "pdo": -0.178,
      "iod": 0.25,
      "anino": -0.032,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 10,
    "data": {
      "nao": -0.181,
      "amo": -0.235,
      "nino": 0.283,
      "pdo": -0.361,
      "iod": 0.01,
      "anino": -0.3,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 11,
    "data": {
      "nao": -0.28,
      "amo": -0.307,
      "nino": 0.539,
      "pdo": -0.29,
      "iod": -0.372,
      "anino": -0.359,
      "ismr": -0.739
    }
  },
  {
    "year": 1885,
    "month": 12,
    "data": {
      "nao": -0.161,
      "amo": -0.164,
      "nino": 0.421,
      "pdo": -0.151,
      "iod": 0.023,
      "anino": -0.29,
      "ismr": -0.739
    }
  },
  {
    "year": 1886,
    "month": 1,
    "data": {
      "nao": -0.026,
      "amo": 0.027,
      "nino": 0.342,
      "pdo": -0.113,
      "iod": -0.255,
      "anino": 0.304,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 2,
    "data": {
      "nao": -0.069,
      "amo": -0.022,
      "nino": -0.18,
      "pdo": -0.186,
      "iod": -0.41,
      "anino": 0.342,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 3,
    "data": {
      "nao": -0.031,
      "amo": 0.034,
      "nino": -0.33,
      "pdo": -0.128,
      "iod": -0.154,
      "anino": 0.455,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 4,
    "data": {
      "nao": -0.078,
      "amo": -0.009,
      "nino": -0.389,
      "pdo": -0.18,
      "iod": -0.107,
      "anino": 0.372,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 5,
    "data": {
      "nao": -0.091,
      "amo": 0.019,
      "nino": -0.697,
      "pdo": -0.282,
      "iod": 0.002,
      "anino": 0.548,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 6,
    "data": {
      "nao": -0.11,
      "amo": 0.025,
      "nino": -0.856,
      "pdo": -0.297,
      "iod": -0.325,
      "anino": 0.439,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 7,
    "data": {
      "nao": -0.151,
      "amo": -0.022,
      "nino": -0.823,
      "pdo": -0.12,
      "iod": -0.43,
      "anino": 0.2,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 8,
    "data": {
      "nao": -0.215,
      "amo": -0.108,
      "nino": -1.131,
      "pdo": -0.252,
      "iod": -0.383,
      "anino": 0.037,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 9,
    "data": {
      "nao": -0.189,
      "amo": -0.151,
      "nino": -0.829,
      "pdo": -0.29,
      "iod": -0.584,
      "anino": -0.26,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 10,
    "data": {
      "nao": -0.12,
      "amo": -0.063,
      "nino": 1.222,
      "pdo": -0.131,
      "iod": 0.162,
      "anino": 0.224,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 11,
    "data": {
      "nao": -0.112,
      "amo": -0.062,
      "nino": 0.664,
      "pdo": -0.339,
      "iod": -0.463,
      "anino": 0.247,
      "ismr": 6.02
    }
  },
  {
    "year": 1886,
    "month": 12,
    "data": {
      "nao": -0.09,
      "amo": -0.035,
      "nino": 0.398,
      "pdo": -0.347,
      "iod": -0.509,
      "anino": 0.153,
      "ismr": 6.02
    }
  },
  {
    "year": 1887,
    "month": 1,
    "data": {
      "nao": -0.121,
      "amo": -0.137,
      "nino": -1.168,
      "pdo": -0.194,
      "iod": -0.228,
      "anino": -0.436,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 2,
    "data": {
      "nao": -0.089,
      "amo": -0.118,
      "nino": -1.304,
      "pdo": -0.091,
      "iod": -0.069,
      "anino": -0.476,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 3,
    "data": {
      "nao": -0.068,
      "amo": -0.078,
      "nino": -1.182,
      "pdo": -0.017,
      "iod": 0.239,
      "anino": -0.363,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 4,
    "data": {
      "nao": -0.107,
      "amo": -0.068,
      "nino": -1.033,
      "pdo": -0.102,
      "iod": 0.04,
      "anino": -0.093,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 5,
    "data": {
      "nao": -0.074,
      "amo": -0.066,
      "nino": -0.841,
      "pdo": -0.116,
      "iod": -0.056,
      "anino": -0.026,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 6,
    "data": {
      "nao": 0.001,
      "amo": 0.046,
      "nino": -0.891,
      "pdo": -0.151,
      "iod": -0.085,
      "anino": 0.278,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 7,
    "data": {
      "nao": -0.059,
      "amo": 0.022,
      "nino": -0.64,
      "pdo": -0.152,
      "iod": -0.045,
      "anino": 0.296,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 8,
    "data": {
      "nao": -0.081,
      "amo": -0.048,
      "nino": -0.642,
      "pdo": -0.22,
      "iod": 0.119,
      "anino": 0.041,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 9,
    "data": {
      "nao": -0.07,
      "amo": -0.079,
      "nino": -0.455,
      "pdo": -0.317,
      "iod": 0.007,
      "anino": -0.004,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 10,
    "data": {
      "nao": -0.101,
      "amo": -0.117,
      "nino": -1.169,
      "pdo": -0.125,
      "iod": -0.587,
      "anino": -0.155,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 11,
    "data": {
      "nao": -0.106,
      "amo": -0.126,
      "nino": -1.301,
      "pdo": -0.108,
      "iod": -0.365,
      "anino": -0.257,
      "ismr": 12.254
    }
  },
  {
    "year": 1887,
    "month": 12,
    "data": {
      "nao": -0.115,
      "amo": -0.112,
      "nino": -1.809,
      "pdo": -0.128,
      "iod": -0.112,
      "anino": -0.271,
      "ismr": 12.254
    }
  },
  {
    "year": 1888,
    "month": 1,
    "data": {
      "nao": -0.128,
      "amo": -0.083,
      "nino": 0.372,
      "pdo": -0.068,
      "iod": -0.253,
      "anino": 0.196,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 2,
    "data": {
      "nao": -0.139,
      "amo": -0.095,
      "nino": 0.732,
      "pdo": -0.313,
      "iod": -0.116,
      "anino": 0.217,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 3,
    "data": {
      "nao": -0.102,
      "amo": -0.005,
      "nino": 0.805,
      "pdo": -0.24,
      "iod": -0.365,
      "anino": 0.667,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 4,
    "data": {
      "nao": -0.144,
      "amo": -0.089,
      "nino": 0.641,
      "pdo": -0.007,
      "iod": -0.342,
      "anino": 0.211,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 5,
    "data": {
      "nao": -0.189,
      "amo": -0.106,
      "nino": 0.553,
      "pdo": -0.012,
      "iod": -0.243,
      "anino": 0.185,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 6,
    "data": {
      "nao": -0.147,
      "amo": -0.039,
      "nino": 0.416,
      "pdo": -0.159,
      "iod": -0.24,
      "anino": 0.217,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 7,
    "data": {
      "nao": -0.192,
      "amo": -0.152,
      "nino": 0.817,
      "pdo": -0.134,
      "iod": -0.072,
      "anino": -0.056,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 8,
    "data": {
      "nao": -0.25,
      "amo": -0.182,
      "nino": 0.855,
      "pdo": -0.217,
      "iod": -0.14,
      "anino": 0.02,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 9,
    "data": {
      "nao": -0.252,
      "amo": -0.176,
      "nino": 1.316,
      "pdo": -0.349,
      "iod": 0.148,
      "anino": -0.081,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 10,
    "data": {
      "nao": -0.055,
      "amo": -0.064,
      "nino": -0.234,
      "pdo": -0.182,
      "iod": 0.122,
      "anino": 0.103,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 11,
    "data": {
      "nao": -0.059,
      "amo": -0.038,
      "nino": -0.174,
      "pdo": -0.151,
      "iod": 0.005,
      "anino": 0.21,
      "ismr": -9.661
    }
  },
  {
    "year": 1888,
    "month": 12,
    "data": {
      "nao": -0.089,
      "amo": -0.04,
      "nino": -0.022,
      "pdo": 0.046,
      "iod": -0.01,
      "anino": 0.37,
      "ismr": -9.661
    }
  },
  {
    "year": 1889,
    "month": 1,
    "data": {
      "nao": -0.091,
      "amo": -0.03,
      "nino": 1.567,
      "pdo": -0.062,
      "iod": -0.472,
      "anino": 0.347,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 2,
    "data": {
      "nao": -0.044,
      "amo": 0.002,
      "nino": 1.526,
      "pdo": -0.022,
      "iod": -0.276,
      "anino": 0.357,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 3,
    "data": {
      "nao": -0.106,
      "amo": -0.021,
      "nino": 1.088,
      "pdo": -0.141,
      "iod": -0.501,
      "anino": 0.505,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 4,
    "data": {
      "nao": -0.098,
      "amo": -0.024,
      "nino": 0.219,
      "pdo": -0.196,
      "iod": -0.708,
      "anino": 0.382,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 5,
    "data": {
      "nao": -0.085,
      "amo": -0.009,
      "nino": 0.174,
      "pdo": -0.304,
      "iod": -0.372,
      "anino": 0.149,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 6,
    "data": {
      "nao": -0.115,
      "amo": -0.046,
      "nino": -0.124,
      "pdo": -0.313,
      "iod": -0.204,
      "anino": 0.06,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 7,
    "data": {
      "nao": -0.219,
      "amo": -0.149,
      "nino": -0.328,
      "pdo": -0.522,
      "iod": -0.055,
      "anino": -0.33,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 8,
    "data": {
      "nao": -0.187,
      "amo": -0.149,
      "nino": -0.512,
      "pdo": -0.382,
      "iod": -0.134,
      "anino": -0.319,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 9,
    "data": {
      "nao": -0.184,
      "amo": -0.134,
      "nino": -0.592,
      "pdo": -0.259,
      "iod": -0.34,
      "anino": -0.248,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 10,
    "data": {
      "nao": -0.174,
      "amo": -0.109,
      "nino": 1.579,
      "pdo": -0.306,
      "iod": 0.097,
      "anino": 0.145,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 11,
    "data": {
      "nao": -0.139,
      "amo": -0.125,
      "nino": 1.987,
      "pdo": -0.357,
      "iod": -0.213,
      "anino": -0.013,
      "ismr": 20.098
    }
  },
  {
    "year": 1889,
    "month": 12,
    "data": {
      "nao": -0.123,
      "amo": -0.102,
      "nino": 1.687,
      "pdo": -0.287,
      "iod": -0.137,
      "anino": 0.036,
      "ismr": 20.098
    }
  },
  {
    "year": 1890,
    "month": 1,
    "data": {
      "nao": -0.054,
      "amo": -0.109,
      "nino": -0.971,
      "pdo": -0.01,
      "iod": -0.287,
      "anino": -0.627,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 2,
    "data": {
      "nao": -0.076,
      "amo": -0.146,
      "nino": -0.691,
      "pdo": 0.043,
      "iod": -0.203,
      "anino": -0.586,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 3,
    "data": {
      "nao": -0.093,
      "amo": -0.162,
      "nino": -0.475,
      "pdo": -0.003,
      "iod": 0.002,
      "anino": -0.554,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 4,
    "data": {
      "nao": -0.166,
      "amo": -0.19,
      "nino": -0.751,
      "pdo": 0.017,
      "iod": -0.038,
      "anino": -0.619,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 5,
    "data": {
      "nao": -0.185,
      "amo": -0.202,
      "nino": -0.863,
      "pdo": -0.234,
      "iod": -0.179,
      "anino": -0.804,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 6,
    "data": {
      "nao": -0.174,
      "amo": -0.216,
      "nino": -0.992,
      "pdo": -0.101,
      "iod": -0.583,
      "anino": -0.635,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 7,
    "data": {
      "nao": -0.257,
      "amo": -0.336,
      "nino": -1.117,
      "pdo": -0.053,
      "iod": -0.785,
      "anino": -0.809,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 8,
    "data": {
      "nao": -0.277,
      "amo": -0.342,
      "nino": -1.513,
      "pdo": -0.152,
      "iod": -0.532,
      "anino": -0.835,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 9,
    "data": {
      "nao": -0.234,
      "amo": -0.336,
      "nino": -1.631,
      "pdo": -0.194,
      "iod": -0.614,
      "anino": -1.029,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 10,
    "data": {
      "nao": -0.105,
      "amo": -0.141,
      "nino": -1.403,
      "pdo": -0.094,
      "iod": -0.546,
      "anino": -0.363,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 11,
    "data": {
      "nao": 0.001,
      "amo": -0.038,
      "nino": -2.065,
      "pdo": -0.143,
      "iod": -0.356,
      "anino": -0.434,
      "ismr": 13.832
    }
  },
  {
    "year": 1890,
    "month": 12,
    "data": {
      "nao": -0.094,
      "amo": -0.128,
      "nino": -1.102,
      "pdo": -0.109,
      "iod": -0.288,
      "anino": -0.574,
      "ismr": 13.832
    }
  },
  {
    "year": 1891,
    "month": 1,
    "data": {
      "nao": -0.233,
      "amo": -0.295,
      "nino": -0.367,
      "pdo": -0.208,
      "iod": 0.005,
      "anino": -0.658,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 2,
    "data": {
      "nao": -0.16,
      "amo": -0.215,
      "nino": 0.077,
      "pdo": -0.168,
      "iod": -0.114,
      "anino": -0.61,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 3,
    "data": {
      "nao": -0.165,
      "amo": -0.117,
      "nino": -0.19,
      "pdo": -0.254,
      "iod": -0.126,
      "anino": -0.118,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 4,
    "data": {
      "nao": -0.193,
      "amo": -0.102,
      "nino": 0.11,
      "pdo": -0.236,
      "iod": -0.012,
      "anino": -0.081,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 5,
    "data": {
      "nao": -0.198,
      "amo": -0.127,
      "nino": 0.304,
      "pdo": -0.179,
      "iod": -0.006,
      "anino": -0.087,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 6,
    "data": {
      "nao": -0.175,
      "amo": -0.084,
      "nino": 0.11,
      "pdo": -0.204,
      "iod": -0.018,
      "anino": 0.048,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 7,
    "data": {
      "nao": -0.074,
      "amo": -0.011,
      "nino": -0.051,
      "pdo": -0.064,
      "iod": -0.028,
      "anino": 0.139,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 8,
    "data": {
      "nao": -0.135,
      "amo": -0.089,
      "nino": -0.11,
      "pdo": -0.074,
      "iod": -0.022,
      "anino": 0.226,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 9,
    "data": {
      "nao": -0.1,
      "amo": -0.104,
      "nino": -0.157,
      "pdo": -0.092,
      "iod": 0.102,
      "anino": 0.139,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 10,
    "data": {
      "nao": -0.163,
      "amo": -0.204,
      "nino": -1.871,
      "pdo": -0.058,
      "iod": -0.563,
      "anino": -0.581,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 11,
    "data": {
      "nao": -0.181,
      "amo": -0.222,
      "nino": -1.756,
      "pdo": -0.147,
      "iod": -0.215,
      "anino": -0.618,
      "ismr": -14.433
    }
  },
  {
    "year": 1891,
    "month": 12,
    "data": {
      "nao": -0.217,
      "amo": -0.27,
      "nino": -0.986,
      "pdo": -0.127,
      "iod": -0.129,
      "anino": -0.659,
      "ismr": -14.433
    }
  },
  {
    "year": 1892,
    "month": 1,
    "data": {
      "nao": -0.126,
      "amo": -0.105,
      "nino": -0.205,
      "pdo": -0.133,
      "iod": 0.042,
      "anino": -0.085,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 2,
    "data": {
      "nao": -0.137,
      "amo": -0.121,
      "nino": -0.18,
      "pdo": -0.132,
      "iod": -0.028,
      "anino": -0.03,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 3,
    "data": {
      "nao": -0.122,
      "amo": -0.112,
      "nino": -0.489,
      "pdo": -0.189,
      "iod": -0.125,
      "anino": -0.012,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 4,
    "data": {
      "nao": -0.081,
      "amo": -0.084,
      "nino": -0.767,
      "pdo": -0.151,
      "iod": -0.026,
      "anino": -0.161,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 5,
    "data": {
      "nao": -0.207,
      "amo": -0.188,
      "nino": -0.456,
      "pdo": -0.165,
      "iod": 0.005,
      "anino": -0.249,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 6,
    "data": {
      "nao": -0.225,
      "amo": -0.229,
      "nino": -0.4,
      "pdo": -0.187,
      "iod": 0.08,
      "anino": -0.513,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 7,
    "data": {
      "nao": -0.293,
      "amo": -0.249,
      "nino": -0.767,
      "pdo": -0.325,
      "iod": -0.497,
      "anino": -0.643,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 8,
    "data": {
      "nao": -0.22,
      "amo": -0.173,
      "nino": -1.072,
      "pdo": -0.303,
      "iod": -0.669,
      "anino": -0.346,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 9,
    "data": {
      "nao": -0.306,
      "amo": -0.301,
      "nino": -1.535,
      "pdo": -0.092,
      "iod": -0.625,
      "anino": -0.583,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 10,
    "data": {
      "nao": -0.145,
      "amo": -0.158,
      "nino": 0.226,
      "pdo": -0.147,
      "iod": 0.078,
      "anino": -0.01,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 11,
    "data": {
      "nao": -0.207,
      "amo": -0.221,
      "nino": -0.075,
      "pdo": -0.084,
      "iod": 0.11,
      "anino": -0.319,
      "ismr": 35.376
    }
  },
  {
    "year": 1892,
    "month": 12,
    "data": {
      "nao": -0.138,
      "amo": -0.136,
      "nino": -0.294,
      "pdo": -0.094,
      "iod": 0.272,
      "anino": -0.244,
      "ismr": 35.376
    }
  },
  {
    "year": 1893,
    "month": 1,
    "data": {
      "nao": -0.176,
      "amo": -0.173,
      "nino": -1.048,
      "pdo": -0.359,
      "iod": -0.182,
      "anino": -0.035,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 2,
    "data": {
      "nao": -0.106,
      "amo": -0.143,
      "nino": -1.208,
      "pdo": -0.29,
      "iod": -0.174,
      "anino": -0.26,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 3,
    "data": {
      "nao": -0.152,
      "amo": -0.182,
      "nino": -0.915,
      "pdo": -0.355,
      "iod": -0.316,
      "anino": -0.201,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 4,
    "data": {
      "nao": -0.16,
      "amo": -0.195,
      "nino": -0.918,
      "pdo": -0.324,
      "iod": -0.08,
      "anino": -0.239,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 5,
    "data": {
      "nao": -0.181,
      "amo": -0.185,
      "nino": -0.991,
      "pdo": -0.27,
      "iod": -0.423,
      "anino": -0.277,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 6,
    "data": {
      "nao": -0.101,
      "amo": -0.068,
      "nino": -1.426,
      "pdo": -0.424,
      "iod": -0.49,
      "anino": -0.221,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 7,
    "data": {
      "nao": -0.104,
      "amo": -0.038,
      "nino": -1.315,
      "pdo": -0.296,
      "iod": -0.666,
      "anino": 0.068,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 8,
    "data": {
      "nao": -0.109,
      "amo": -0.046,
      "nino": -1.451,
      "pdo": -0.445,
      "iod": -0.668,
      "anino": -0.031,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 9,
    "data": {
      "nao": -0.063,
      "amo": -0.093,
      "nino": -1.597,
      "pdo": -0.297,
      "iod": -0.64,
      "anino": -0.241,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 10,
    "data": {
      "nao": -0.21,
      "amo": -0.229,
      "nino": -1.91,
      "pdo": -0.171,
      "iod": -0.157,
      "anino": -0.436,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 11,
    "data": {
      "nao": -0.217,
      "amo": -0.264,
      "nino": -2.108,
      "pdo": -0.269,
      "iod": -0.335,
      "anino": -0.521,
      "ismr": 26.211
    }
  },
  {
    "year": 1893,
    "month": 12,
    "data": {
      "nao": -0.184,
      "amo": -0.195,
      "nino": -1.845,
      "pdo": -0.243,
      "iod": -0.262,
      "anino": -0.263,
      "ismr": 26.211
    }
  },
  {
    "year": 1894,
    "month": 1,
    "data": {
      "nao": -0.16,
      "amo": -0.198,
      "nino": -1.153,
      "pdo": -0.299,
      "iod": -0.027,
      "anino": -0.506,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 2,
    "data": {
      "nao": -0.175,
      "amo": -0.236,
      "nino": -1.114,
      "pdo": -0.115,
      "iod": 0.022,
      "anino": -0.643,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 3,
    "data": {
      "nao": -0.16,
      "amo": -0.245,
      "nino": -0.968,
      "pdo": -0.197,
      "iod": -0.033,
      "anino": -0.824,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 4,
    "data": {
      "nao": -0.177,
      "amo": -0.266,
      "nino": -0.659,
      "pdo": -0.168,
      "iod": -0.129,
      "anino": -0.812,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 5,
    "data": {
      "nao": -0.192,
      "amo": -0.25,
      "nino": -0.786,
      "pdo": -0.207,
      "iod": 0.049,
      "anino": -0.715,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 6,
    "data": {
      "nao": -0.262,
      "amo": -0.285,
      "nino": -0.815,
      "pdo": -0.248,
      "iod": -0.035,
      "anino": -0.676,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 7,
    "data": {
      "nao": -0.227,
      "amo": -0.232,
      "nino": -0.47,
      "pdo": -0.243,
      "iod": -0.049,
      "anino": -0.613,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 8,
    "data": {
      "nao": -0.224,
      "amo": -0.248,
      "nino": -0.707,
      "pdo": -0.339,
      "iod": 0.07,
      "anino": -0.629,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 9,
    "data": {
      "nao": -0.198,
      "amo": -0.218,
      "nino": -0.892,
      "pdo": -0.257,
      "iod": -0.123,
      "anino": -0.483,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 10,
    "data": {
      "nao": -0.072,
      "amo": -0.086,
      "nino": -1.549,
      "pdo": -0.154,
      "iod": -0.224,
      "anino": -0.198,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 11,
    "data": {
      "nao": -0.127,
      "amo": -0.098,
      "nino": -1.628,
      "pdo": -0.264,
      "iod": -0.223,
      "anino": -0.185,
      "ismr": 30.345
    }
  },
  {
    "year": 1894,
    "month": 12,
    "data": {
      "nao": -0.168,
      "amo": -0.181,
      "nino": -1.06,
      "pdo": -0.213,
      "iod": -0.134,
      "anino": -0.439,
      "ismr": 30.345
    }
  },
  {
    "year": 1895,
    "month": 1,
    "data": {
      "nao": -0.219,
      "amo": -0.222,
      "nino": -0.622,
      "pdo": -0.139,
      "iod": -0.216,
      "anino": -0.181,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 2,
    "data": {
      "nao": -0.246,
      "amo": -0.217,
      "nino": -0.822,
      "pdo": -0.113,
      "iod": -0.089,
      "anino": -0.128,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 3,
    "data": {
      "nao": -0.269,
      "amo": -0.286,
      "nino": -0.406,
      "pdo": -0.192,
      "iod": -0.041,
      "anino": -0.433,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 4,
    "data": {
      "nao": -0.28,
      "amo": -0.317,
      "nino": -0.166,
      "pdo": -0.191,
      "iod": -0.08,
      "anino": -0.697,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 5,
    "data": {
      "nao": -0.205,
      "amo": -0.229,
      "nino": -0.35,
      "pdo": -0.19,
      "iod": 0.096,
      "anino": -0.708,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 6,
    "data": {
      "nao": -0.173,
      "amo": -0.18,
      "nino": -0.53,
      "pdo": -0.247,
      "iod": -0.215,
      "anino": -0.636,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 7,
    "data": {
      "nao": -0.189,
      "amo": -0.171,
      "nino": -0.353,
      "pdo": -0.447,
      "iod": -0.545,
      "anino": -0.4,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 8,
    "data": {
      "nao": -0.198,
      "amo": -0.187,
      "nino": 0.156,
      "pdo": -0.434,
      "iod": -0.006,
      "anino": -0.332,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 9,
    "data": {
      "nao": -0.116,
      "amo": -0.099,
      "nino": 0.406,
      "pdo": -0.264,
      "iod": 0.005,
      "anino": -0.22,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 10,
    "data": {
      "nao": -0.215,
      "amo": -0.255,
      "nino": -0.919,
      "pdo": -0.281,
      "iod": -0.098,
      "anino": -0.55,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 11,
    "data": {
      "nao": -0.163,
      "amo": -0.224,
      "nino": -0.819,
      "pdo": -0.284,
      "iod": -0.194,
      "anino": -0.598,
      "ismr": -6.596
    }
  },
  {
    "year": 1895,
    "month": 12,
    "data": {
      "nao": -0.208,
      "amo": -0.252,
      "nino": -0.655,
      "pdo": -0.126,
      "iod": -0.12,
      "anino": -0.516,
      "ismr": -6.596
    }
  },
  {
    "year": 1896,
    "month": 1,
    "data": {
      "nao": -0.185,
      "amo": -0.173,
      "nino": -0.328,
      "pdo": -0.168,
      "iod": -0.328,
      "anino": -0.189,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 2,
    "data": {
      "nao": -0.131,
      "amo": -0.116,
      "nino": -0.132,
      "pdo": -0.101,
      "iod": -0.415,
      "anino": -0.061,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 3,
    "data": {
      "nao": -0.114,
      "amo": -0.087,
      "nino": -0.027,
      "pdo": -0.081,
      "iod": -0.269,
      "anino": -0.014,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 4,
    "data": {
      "nao": -0.121,
      "amo": -0.093,
      "nino": 0.095,
      "pdo": -0.046,
      "iod": -0.107,
      "anino": -0.079,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 5,
    "data": {
      "nao": -0.021,
      "amo": 0.043,
      "nino": -0.252,
      "pdo": -0.056,
      "iod": 0.142,
      "anino": 0.056,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 6,
    "data": {
      "nao": -0.02,
      "amo": 0.033,
      "nino": -0.087,
      "pdo": -0.13,
      "iod": 0.058,
      "anino": 0.162,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 7,
    "data": {
      "nao": -0.029,
      "amo": 0.018,
      "nino": 0.224,
      "pdo": -0.076,
      "iod": -0.121,
      "anino": 0.14,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 8,
    "data": {
      "nao": -0.081,
      "amo": -0.004,
      "nino": 0.42,
      "pdo": -0.186,
      "iod": -0.19,
      "anino": 0.104,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 9,
    "data": {
      "nao": -0.039,
      "amo": 0.019,
      "nino": 0.606,
      "pdo": -0.259,
      "iod": -0.155,
      "anino": 0.24,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 10,
    "data": {
      "nao": -0.097,
      "amo": -0.079,
      "nino": 0.307,
      "pdo": -0.123,
      "iod": 0.053,
      "anino": -0.068,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 11,
    "data": {
      "nao": -0.145,
      "amo": -0.123,
      "nino": 0.63,
      "pdo": -0.124,
      "iod": -0.227,
      "anino": -0.038,
      "ismr": -5.361
    }
  },
  {
    "year": 1896,
    "month": 12,
    "data": {
      "nao": -0.156,
      "amo": -0.132,
      "nino": 0.182,
      "pdo": -0.066,
      "iod": -0.168,
      "anino": -0.145,
      "ismr": -5.361
    }
  },
  {
    "year": 1897,
    "month": 1,
    "data": {
      "nao": -0.121,
      "amo": -0.11,
      "nino": 1.12,
      "pdo": -0.226,
      "iod": -0.034,
      "anino": -0.072,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 2,
    "data": {
      "nao": -0.099,
      "amo": -0.069,
      "nino": 0.853,
      "pdo": -0.207,
      "iod": -0.165,
      "anino": 0.01,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 3,
    "data": {
      "nao": -0.046,
      "amo": 0.017,
      "nino": 0.785,
      "pdo": -0.197,
      "iod": -0.273,
      "anino": 0.081,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 4,
    "data": {
      "nao": -0.008,
      "amo": 0.022,
      "nino": 0.379,
      "pdo": -0.21,
      "iod": -0.282,
      "anino": 0.093,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 5,
    "data": {
      "nao": -0.099,
      "amo": -0.064,
      "nino": 0.15,
      "pdo": -0.273,
      "iod": -0.033,
      "anino": -0.005,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 6,
    "data": {
      "nao": -0.136,
      "amo": -0.051,
      "nino": 0.285,
      "pdo": -0.107,
      "iod": -0.157,
      "anino": -0.074,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 7,
    "data": {
      "nao": -0.129,
      "amo": -0.01,
      "nino": 0.241,
      "pdo": -0.179,
      "iod": 0.073,
      "anino": 0.05,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 8,
    "data": {
      "nao": -0.14,
      "amo": -0.066,
      "nino": 0.434,
      "pdo": -0.241,
      "iod": 0.202,
      "anino": 0.048,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 9,
    "data": {
      "nao": -0.118,
      "amo": -0.103,
      "nino": 0.131,
      "pdo": -0.274,
      "iod": -0.027,
      "anino": -0.081,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 10,
    "data": {
      "nao": -0.131,
      "amo": -0.069,
      "nino": 0.901,
      "pdo": -0.325,
      "iod": 0.075,
      "anino": 0.239,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 11,
    "data": {
      "nao": -0.068,
      "amo": -0.005,
      "nino": 1.744,
      "pdo": -0.193,
      "iod": 0.203,
      "anino": 0.293,
      "ismr": 10.298
    }
  },
  {
    "year": 1897,
    "month": 12,
    "data": {
      "nao": -0.107,
      "amo": -0.049,
      "nino": 1.361,
      "pdo": -0.229,
      "iod": 0.134,
      "anino": 0.204,
      "ismr": 10.298
    }
  },
  {
    "year": 1898,
    "month": 1,
    "data": {
      "nao": -0.104,
      "amo": -0.12,
      "nino": -0.301,
      "pdo": -0.037,
      "iod": -0.202,
      "anino": -0.131,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 2,
    "data": {
      "nao": -0.074,
      "amo": -0.082,
      "nino": -0.505,
      "pdo": -0.082,
      "iod": -0.269,
      "anino": -0.115,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 3,
    "data": {
      "nao": -0.078,
      "amo": -0.076,
      "nino": -0.483,
      "pdo": -0.072,
      "iod": -0.339,
      "anino": -0.009,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 4,
    "data": {
      "nao": -0.068,
      "amo": -0.1,
      "nino": -0.362,
      "pdo": -0.077,
      "iod": -0.27,
      "anino": -0.222,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 5,
    "data": {
      "nao": -0.09,
      "amo": -0.115,
      "nino": -0.316,
      "pdo": -0.255,
      "iod": -0.148,
      "anino": -0.271,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 6,
    "data": {
      "nao": -0.032,
      "amo": -0.027,
      "nino": -0.187,
      "pdo": -0.325,
      "iod": -0.276,
      "anino": -0.069,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 7,
    "data": {
      "nao": -0.035,
      "amo": -0.035,
      "nino": -0.513,
      "pdo": -0.248,
      "iod": -0.364,
      "anino": -0.088,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 8,
    "data": {
      "nao": -0.016,
      "amo": -0.004,
      "nino": -1.16,
      "pdo": -0.298,
      "iod": -0.366,
      "anino": -0.234,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 9,
    "data": {
      "nao": -0.033,
      "amo": -0.017,
      "nino": -0.602,
      "pdo": -0.373,
      "iod": -0.404,
      "anino": -0.273,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 10,
    "data": {
      "nao": -0.159,
      "amo": -0.129,
      "nino": 0.242,
      "pdo": -0.177,
      "iod": -0.338,
      "anino": -0.079,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 11,
    "data": {
      "nao": -0.2,
      "amo": -0.173,
      "nino": -0.524,
      "pdo": -0.177,
      "iod": -0.535,
      "anino": -0.161,
      "ismr": 8.682
    }
  },
  {
    "year": 1898,
    "month": 12,
    "data": {
      "nao": -0.169,
      "amo": -0.168,
      "nino": -0.569,
      "pdo": -0.127,
      "iod": -0.2,
      "anino": -0.197,
      "ismr": 8.682
    }
  },
  {
    "year": 1899,
    "month": 1,
    "data": {
      "nao": -0.06,
      "amo": -0.102,
      "nino": -0.83,
      "pdo": -0.041,
      "iod": -0.493,
      "anino": -0.46,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 2,
    "data": {
      "nao": -0.089,
      "amo": -0.154,
      "nino": -0.857,
      "pdo": -0.087,
      "iod": -0.242,
      "anino": -0.567,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 3,
    "data": {
      "nao": -0.087,
      "amo": -0.126,
      "nino": -0.657,
      "pdo": -0.105,
      "iod": -0.057,
      "anino": -0.538,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 4,
    "data": {
      "nao": -0.065,
      "amo": -0.077,
      "nino": -0.537,
      "pdo": -0.014,
      "iod": -0.337,
      "anino": -0.345,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 5,
    "data": {
      "nao": -0.051,
      "amo": 0.008,
      "nino": -0.104,
      "pdo": 0.003,
      "iod": -0.197,
      "anino": -0.087,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 6,
    "data": {
      "nao": -0.081,
      "amo": -0.037,
      "nino": -0.33,
      "pdo": -0.218,
      "iod": -0.4,
      "anino": -0.258,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 7,
    "data": {
      "nao": -0.049,
      "amo": -0.031,
      "nino": 0.101,
      "pdo": -0.01,
      "iod": -0.148,
      "anino": -0.024,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 8,
    "data": {
      "nao": 0.024,
      "amo": 0.047,
      "nino": 0.105,
      "pdo": -0.156,
      "iod": -0.214,
      "anino": -0.138,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 9,
    "data": {
      "nao": -0.046,
      "amo": -0.012,
      "nino": 0.393,
      "pdo": -0.347,
      "iod": -0.559,
      "anino": -0.128,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 10,
    "data": {
      "nao": -0.084,
      "amo": -0.111,
      "nino": -0.172,
      "pdo": -0.241,
      "iod": -0.268,
      "anino": -0.309,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 11,
    "data": {
      "nao": -0.121,
      "amo": -0.129,
      "nino": -0.48,
      "pdo": -0.203,
      "iod": -0.344,
      "anino": -0.266,
      "ismr": -55.208
    }
  },
  {
    "year": 1899,
    "month": 12,
    "data": {
      "nao": -0.066,
      "amo": -0.093,
      "nino": -0.888,
      "pdo": -0.21,
      "iod": -0.435,
      "anino": -0.363,
      "ismr": -55.208
    }
  },
  {
    "year": 1900,
    "month": 1,
    "data": {
      "nao": -0.097,
      "amo": -0.048,
      "nino": 0.795,
      "pdo": -0.234,
      "iod": -0.281,
      "anino": 0.218,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 2,
    "data": {
      "nao": -0.083,
      "amo": -0.04,
      "nino": 1.128,
      "pdo": -0.229,
      "iod": -0.025,
      "anino": 0.243,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 3,
    "data": {
      "nao": -0.194,
      "amo": -0.157,
      "nino": 0.778,
      "pdo": -0.315,
      "iod": -0.271,
      "anino": 0.154,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 4,
    "data": {
      "nao": -0.111,
      "amo": -0.081,
      "nino": 0.631,
      "pdo": -0.219,
      "iod": -0.299,
      "anino": 0.196,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 5,
    "data": {
      "nao": -0.188,
      "amo": -0.137,
      "nino": 0.557,
      "pdo": -0.243,
      "iod": 0.137,
      "anino": -0.078,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 6,
    "data": {
      "nao": -0.17,
      "amo": -0.111,
      "nino": 0.842,
      "pdo": -0.08,
      "iod": 0.092,
      "anino": -0.112,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 7,
    "data": {
      "nao": -0.189,
      "amo": -0.104,
      "nino": 0.847,
      "pdo": -0.126,
      "iod": 0.033,
      "anino": -0.116,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 8,
    "data": {
      "nao": -0.18,
      "amo": -0.147,
      "nino": 0.55,
      "pdo": -0.066,
      "iod": -0.161,
      "anino": -0.222,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 9,
    "data": {
      "nao": -0.124,
      "amo": -0.096,
      "nino": 0.552,
      "pdo": -0.127,
      "iod": -0.31,
      "anino": -0.217,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 10,
    "data": {
      "nao": -0.091,
      "amo": -0.039,
      "nino": 0.812,
      "pdo": -0.189,
      "iod": -0.281,
      "anino": 0.104,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 11,
    "data": {
      "nao": -0.116,
      "amo": -0.065,
      "nino": 0.698,
      "pdo": -0.348,
      "iod": -0.318,
      "anino": 0.133,
      "ismr": 9.876
    }
  },
  {
    "year": 1900,
    "month": 12,
    "data": {
      "nao": -0.085,
      "amo": -0.023,
      "nino": 0.86,
      "pdo": -0.222,
      "iod": -0.22,
      "anino": 0.314,
      "ismr": 9.876
    }
  },
  {
    "year": 1901,
    "month": 1,
    "data": {
      "nao": -0.08,
      "amo": -0.08,
      "nino": 0.909,
      "pdo": -0.265,
      "iod": -0.067,
      "anino": -0.027,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 2,
    "data": {
      "nao": -0.063,
      "amo": -0.029,
      "nino": 0.521,
      "pdo": -0.14,
      "iod": -0.257,
      "anino": 0.244,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 3,
    "data": {
      "nao": -0.123,
      "amo": -0.087,
      "nino": 0.422,
      "pdo": -0.267,
      "iod": -0.174,
      "anino": 0.273,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 4,
    "data": {
      "nao": -0.133,
      "amo": -0.05,
      "nino": 0.315,
      "pdo": -0.096,
      "iod": -0.112,
      "anino": 0.331,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 5,
    "data": {
      "nao": -0.116,
      "amo": -0.049,
      "nino": -0.037,
      "pdo": -0.029,
      "iod": -0.042,
      "anino": 0.233,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 6,
    "data": {
      "nao": -0.08,
      "amo": 0.018,
      "nino": -0.081,
      "pdo": -0.099,
      "iod": -0.127,
      "anino": 0.194,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 7,
    "data": {
      "nao": -0.149,
      "amo": -0.091,
      "nino": -0.233,
      "pdo": -0.162,
      "iod": -0.443,
      "anino": -0.106,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 8,
    "data": {
      "nao": -0.137,
      "amo": -0.082,
      "nino": 0.132,
      "pdo": -0.058,
      "iod": -0.465,
      "anino": 0.082,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 9,
    "data": {
      "nao": -0.124,
      "amo": -0.118,
      "nino": -0.019,
      "pdo": -0.232,
      "iod": -0.516,
      "anino": -0.134,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 10,
    "data": {
      "nao": -0.052,
      "amo": -0.052,
      "nino": 0.655,
      "pdo": 0.026,
      "iod": -0.106,
      "anino": -0.162,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 11,
    "data": {
      "nao": -0.057,
      "amo": -0.048,
      "nino": 0.435,
      "pdo": -0.111,
      "iod": -0.097,
      "anino": -0.181,
      "ismr": -31.94
    }
  },
  {
    "year": 1901,
    "month": 12,
    "data": {
      "nao": -0.04,
      "amo": -0.062,
      "nino": 0.676,
      "pdo": -0.214,
      "iod": -0.144,
      "anino": -0.181,
      "ismr": -31.94
    }
  },
  {
    "year": 1902,
    "month": 1,
    "data": {
      "nao": -0.182,
      "amo": -0.174,
      "nino": -0.14,
      "pdo": -0.314,
      "iod": -0.09,
      "anino": -0.254,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 2,
    "data": {
      "nao": -0.178,
      "amo": -0.165,
      "nino": -0.036,
      "pdo": -0.372,
      "iod": -0.063,
      "anino": -0.167,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 3,
    "data": {
      "nao": -0.205,
      "amo": -0.161,
      "nino": 0.043,
      "pdo": -0.308,
      "iod": 0.215,
      "anino": -0.123,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 4,
    "data": {
      "nao": -0.211,
      "amo": -0.178,
      "nino": 0.336,
      "pdo": -0.371,
      "iod": 0.089,
      "anino": -0.19,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 5,
    "data": {
      "nao": -0.268,
      "amo": -0.201,
      "nino": 0.582,
      "pdo": -0.368,
      "iod": -0.02,
      "anino": -0.066,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 6,
    "data": {
      "nao": -0.415,
      "amo": -0.334,
      "nino": 1.128,
      "pdo": -0.408,
      "iod": 0.246,
      "anino": -0.272,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 7,
    "data": {
      "nao": -0.434,
      "amo": -0.354,
      "nino": 1.299,
      "pdo": -0.386,
      "iod": 0.422,
      "anino": -0.42,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 8,
    "data": {
      "nao": -0.308,
      "amo": -0.265,
      "nino": 1.238,
      "pdo": -0.496,
      "iod": 0.393,
      "anino": -0.308,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 9,
    "data": {
      "nao": -0.167,
      "amo": -0.145,
      "nino": 1.104,
      "pdo": -0.394,
      "iod": 0.343,
      "anino": -0.193,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 10,
    "data": {
      "nao": -0.14,
      "amo": -0.178,
      "nino": 0.008,
      "pdo": -0.29,
      "iod": -0.04,
      "anino": -0.353,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 11,
    "data": {
      "nao": -0.18,
      "amo": -0.198,
      "nino": -0.055,
      "pdo": -0.27,
      "iod": -0.053,
      "anino": -0.35,
      "ismr": -14.48
    }
  },
  {
    "year": 1902,
    "month": 12,
    "data": {
      "nao": -0.222,
      "amo": -0.183,
      "nino": -0.075,
      "pdo": -0.322,
      "iod": -0.098,
      "anino": -0.159,
      "ismr": -14.48
    }
  },
  {
    "year": 1903,
    "month": 1,
    "data": {
      "nao": -0.228,
      "amo": -0.207,
      "nino": 1.21,
      "pdo": -0.265,
      "iod": -0.26,
      "anino": -0.035,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 2,
    "data": {
      "nao": -0.176,
      "amo": -0.147,
      "nino": 0.926,
      "pdo": -0.311,
      "iod": -0.252,
      "anino": 0.014,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 3,
    "data": {
      "nao": -0.183,
      "amo": -0.202,
      "nino": 0.749,
      "pdo": -0.341,
      "iod": -0.285,
      "anino": -0.271,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 4,
    "data": {
      "nao": -0.239,
      "amo": -0.213,
      "nino": 0.454,
      "pdo": -0.528,
      "iod": -0.288,
      "anino": 0.089,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 5,
    "data": {
      "nao": -0.287,
      "amo": -0.252,
      "nino": 0.218,
      "pdo": -0.594,
      "iod": -0.118,
      "anino": 0.043,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 6,
    "data": {
      "nao": -0.403,
      "amo": -0.356,
      "nino": 0.222,
      "pdo": -0.619,
      "iod": 0.033,
      "anino": -0.035,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 7,
    "data": {
      "nao": -0.401,
      "amo": -0.362,
      "nino": 0.107,
      "pdo": -0.59,
      "iod": -0.084,
      "anino": -0.251,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 8,
    "data": {
      "nao": -0.537,
      "amo": -0.485,
      "nino": 0.151,
      "pdo": -0.678,
      "iod": -0.094,
      "anino": -0.319,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 9,
    "data": {
      "nao": -0.48,
      "amo": -0.485,
      "nino": 0.318,
      "pdo": -0.372,
      "iod": -0.25,
      "anino": -0.441,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 10,
    "data": {
      "nao": -0.141,
      "amo": -0.145,
      "nino": 1.201,
      "pdo": -0.418,
      "iod": 0.341,
      "anino": -0.179,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 11,
    "data": {
      "nao": -0.193,
      "amo": -0.193,
      "nino": 1.322,
      "pdo": -0.297,
      "iod": -0.0,
      "anino": -0.228,
      "ismr": 2.779
    }
  },
  {
    "year": 1903,
    "month": 12,
    "data": {
      "nao": -0.226,
      "amo": -0.215,
      "nino": 1.233,
      "pdo": -0.309,
      "iod": -0.12,
      "anino": -0.077,
      "ismr": 2.779
    }
  },
  {
    "year": 1904,
    "month": 1,
    "data": {
      "nao": -0.232,
      "amo": -0.317,
      "nino": -0.507,
      "pdo": -0.451,
      "iod": -0.059,
      "anino": -0.545,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 2,
    "data": {
      "nao": -0.234,
      "amo": -0.313,
      "nino": -0.376,
      "pdo": -0.322,
      "iod": 0.151,
      "anino": -0.579,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 3,
    "data": {
      "nao": -0.275,
      "amo": -0.359,
      "nino": -0.14,
      "pdo": -0.213,
      "iod": 0.142,
      "anino": -0.59,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 4,
    "data": {
      "nao": -0.232,
      "amo": -0.347,
      "nino": -0.174,
      "pdo": -0.212,
      "iod": 0.139,
      "anino": -0.638,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 5,
    "data": {
      "nao": -0.261,
      "amo": -0.374,
      "nino": -0.096,
      "pdo": -0.365,
      "iod": 0.015,
      "anino": -0.761,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 6,
    "data": {
      "nao": -0.293,
      "amo": -0.434,
      "nino": 0.133,
      "pdo": -0.437,
      "iod": -0.018,
      "anino": -0.911,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 7,
    "data": {
      "nao": -0.258,
      "amo": -0.375,
      "nino": 0.234,
      "pdo": -0.636,
      "iod": 0.16,
      "anino": -0.852,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 8,
    "data": {
      "nao": -0.352,
      "amo": -0.403,
      "nino": 0.71,
      "pdo": -0.731,
      "iod": 0.129,
      "anino": -0.662,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 9,
    "data": {
      "nao": -0.425,
      "amo": -0.472,
      "nino": 0.898,
      "pdo": -0.592,
      "iod": 0.201,
      "anino": -0.654,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 10,
    "data": {
      "nao": -0.432,
      "amo": -0.47,
      "nino": 0.357,
      "pdo": -0.289,
      "iod": -0.484,
      "anino": -0.405,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 11,
    "data": {
      "nao": -0.332,
      "amo": -0.371,
      "nino": -0.409,
      "pdo": -0.365,
      "iod": -0.308,
      "anino": -0.356,
      "ismr": -24.837
    }
  },
  {
    "year": 1904,
    "month": 12,
    "data": {
      "nao": -0.304,
      "amo": -0.335,
      "nino": -0.522,
      "pdo": -0.491,
      "iod": -0.048,
      "anino": -0.276,
      "ismr": -24.837
    }
  },
  {
    "year": 1905,
    "month": 1,
    "data": {
      "nao": -0.298,
      "amo": -0.311,
      "nino": 0.437,
      "pdo": -0.548,
      "iod": -0.164,
      "anino": -0.322,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 2,
    "data": {
      "nao": -0.265,
      "amo": -0.293,
      "nino": 0.716,
      "pdo": -0.499,
      "iod": -0.109,
      "anino": -0.321,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 3,
    "data": {
      "nao": -0.216,
      "amo": -0.292,
      "nino": 0.509,
      "pdo": -0.574,
      "iod": -0.202,
      "anino": -0.558,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 4,
    "data": {
      "nao": -0.175,
      "amo": -0.217,
      "nino": 0.216,
      "pdo": -0.468,
      "iod": -0.404,
      "anino": -0.345,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 5,
    "data": {
      "nao": -0.196,
      "amo": -0.224,
      "nino": 0.728,
      "pdo": -0.449,
      "iod": -0.207,
      "anino": -0.364,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 6,
    "data": {
      "nao": -0.225,
      "amo": -0.279,
      "nino": 0.746,
      "pdo": -0.496,
      "iod": 0.092,
      "anino": -0.488,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 7,
    "data": {
      "nao": -0.144,
      "amo": -0.172,
      "nino": 1.141,
      "pdo": -0.293,
      "iod": 0.082,
      "anino": -0.334,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 8,
    "data": {
      "nao": -0.304,
      "amo": -0.298,
      "nino": 1.283,
      "pdo": -0.486,
      "iod": 0.14,
      "anino": -0.237,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 9,
    "data": {
      "nao": -0.324,
      "amo": -0.337,
      "nino": 1.397,
      "pdo": -0.341,
      "iod": 0.089,
      "anino": -0.443,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 10,
    "data": {
      "nao": -0.35,
      "amo": -0.392,
      "nino": 1.191,
      "pdo": -0.567,
      "iod": 0.292,
      "anino": -0.531,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 11,
    "data": {
      "nao": -0.307,
      "amo": -0.311,
      "nino": 1.084,
      "pdo": -0.586,
      "iod": -0.023,
      "anino": -0.21,
      "ismr": -33.302
    }
  },
  {
    "year": 1905,
    "month": 12,
    "data": {
      "nao": -0.288,
      "amo": -0.303,
      "nino": 0.705,
      "pdo": -0.567,
      "iod": -0.16,
      "anino": -0.264,
      "ismr": -33.302
    }
  },
  {
    "year": 1906,
    "month": 1,
    "data": {
      "nao": -0.146,
      "amo": -0.146,
      "nino": 1.404,
      "pdo": -0.479,
      "iod": -0.235,
      "anino": -0.236,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 2,
    "data": {
      "nao": -0.161,
      "amo": -0.144,
      "nino": 1.422,
      "pdo": -0.399,
      "iod": -0.152,
      "anino": -0.169,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 3,
    "data": {
      "nao": -0.164,
      "amo": -0.123,
      "nino": 0.958,
      "pdo": -0.227,
      "iod": -0.376,
      "anino": -0.037,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 4,
    "data": {
      "nao": -0.163,
      "amo": -0.117,
      "nino": 0.616,
      "pdo": -0.197,
      "iod": -0.417,
      "anino": 0.057,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 5,
    "data": {
      "nao": -0.267,
      "amo": -0.205,
      "nino": 0.549,
      "pdo": -0.482,
      "iod": -0.158,
      "anino": -0.082,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 6,
    "data": {
      "nao": -0.17,
      "amo": -0.108,
      "nino": 0.068,
      "pdo": -0.294,
      "iod": 0.061,
      "anino": 0.113,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 7,
    "data": {
      "nao": -0.229,
      "amo": -0.118,
      "nino": 0.202,
      "pdo": -0.056,
      "iod": -0.338,
      "anino": 0.155,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 8,
    "data": {
      "nao": -0.226,
      "amo": -0.144,
      "nino": -0.159,
      "pdo": -0.199,
      "iod": -0.563,
      "anino": 0.053,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 9,
    "data": {
      "nao": -0.271,
      "amo": -0.228,
      "nino": -0.261,
      "pdo": -0.271,
      "iod": -0.871,
      "anino": -0.202,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 10,
    "data": {
      "nao": -0.34,
      "amo": -0.323,
      "nino": 1.61,
      "pdo": -0.365,
      "iod": -0.066,
      "anino": -0.269,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 11,
    "data": {
      "nao": -0.264,
      "amo": -0.296,
      "nino": 2.086,
      "pdo": -0.361,
      "iod": -0.148,
      "anino": -0.476,
      "ismr": 8.832
    }
  },
  {
    "year": 1906,
    "month": 12,
    "data": {
      "nao": -0.241,
      "amo": -0.266,
      "nino": 1.651,
      "pdo": -0.388,
      "iod": -0.309,
      "anino": -0.489,
      "ismr": 8.832
    }
  },
  {
    "year": 1907,
    "month": 1,
    "data": {
      "nao": -0.27,
      "amo": -0.248,
      "nino": -0.352,
      "pdo": -0.199,
      "iod": -0.018,
      "anino": -0.375,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 2,
    "data": {
      "nao": -0.289,
      "amo": -0.275,
      "nino": -0.095,
      "pdo": -0.297,
      "iod": 0.097,
      "anino": -0.347,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 3,
    "data": {
      "nao": -0.249,
      "amo": -0.266,
      "nino": -0.429,
      "pdo": -0.107,
      "iod": 0.142,
      "anino": -0.573,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 4,
    "data": {
      "nao": -0.219,
      "amo": -0.258,
      "nino": -0.335,
      "pdo": -0.095,
      "iod": 0.039,
      "anino": -0.515,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 5,
    "data": {
      "nao": -0.211,
      "amo": -0.252,
      "nino": -0.166,
      "pdo": -0.096,
      "iod": 0.069,
      "anino": -0.484,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 6,
    "data": {
      "nao": -0.322,
      "amo": -0.343,
      "nino": 0.025,
      "pdo": -0.321,
      "iod": -0.015,
      "anino": -0.522,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 7,
    "data": {
      "nao": -0.344,
      "amo": -0.336,
      "nino": -0.283,
      "pdo": -0.385,
      "iod": -0.133,
      "anino": -0.565,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 8,
    "data": {
      "nao": -0.375,
      "amo": -0.345,
      "nino": -0.453,
      "pdo": -0.323,
      "iod": -0.439,
      "anino": -0.601,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 9,
    "data": {
      "nao": -0.258,
      "amo": -0.236,
      "nino": -0.036,
      "pdo": -0.435,
      "iod": -0.018,
      "anino": -0.398,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 10,
    "data": {
      "nao": -0.239,
      "amo": -0.223,
      "nino": -0.42,
      "pdo": -0.25,
      "iod": -0.644,
      "anino": -0.182,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 11,
    "data": {
      "nao": -0.187,
      "amo": -0.128,
      "nino": -0.443,
      "pdo": -0.318,
      "iod": -0.442,
      "anino": -0.062,
      "ismr": -18.008
    }
  },
  {
    "year": 1907,
    "month": 12,
    "data": {
      "nao": -0.282,
      "amo": -0.224,
      "nino": -0.156,
      "pdo": -0.236,
      "iod": -0.15,
      "anino": -0.175,
      "ismr": -18.008
    }
  },
  {
    "year": 1908,
    "month": 1,
    "data": {
      "nao": -0.231,
      "amo": -0.258,
      "nino": -0.692,
      "pdo": -0.452,
      "iod": -0.039,
      "anino": -0.431,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 2,
    "data": {
      "nao": -0.238,
      "amo": -0.258,
      "nino": -0.893,
      "pdo": -0.479,
      "iod": -0.278,
      "anino": -0.372,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 3,
    "data": {
      "nao": -0.22,
      "amo": -0.283,
      "nino": -0.795,
      "pdo": -0.458,
      "iod": -0.341,
      "anino": -0.595,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 4,
    "data": {
      "nao": -0.241,
      "amo": -0.309,
      "nino": -0.601,
      "pdo": -0.442,
      "iod": -0.395,
      "anino": -0.754,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 5,
    "data": {
      "nao": -0.162,
      "amo": -0.225,
      "nino": -0.388,
      "pdo": -0.472,
      "iod": 0.059,
      "anino": -0.702,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 6,
    "data": {
      "nao": -0.136,
      "amo": -0.181,
      "nino": -0.406,
      "pdo": -0.675,
      "iod": 0.299,
      "anino": -0.534,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 7,
    "data": {
      "nao": -0.096,
      "amo": -0.143,
      "nino": -0.596,
      "pdo": -0.735,
      "iod": 0.039,
      "anino": -0.415,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 8,
    "data": {
      "nao": -0.161,
      "amo": -0.166,
      "nino": -0.061,
      "pdo": -0.647,
      "iod": -0.001,
      "anino": -0.332,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 9,
    "data": {
      "nao": -0.203,
      "amo": -0.245,
      "nino": -0.117,
      "pdo": -0.634,
      "iod": -0.036,
      "anino": -0.407,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 10,
    "data": {
      "nao": -0.171,
      "amo": -0.191,
      "nino": 0.5,
      "pdo": -0.434,
      "iod": 0.019,
      "anino": -0.283,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 11,
    "data": {
      "nao": -0.189,
      "amo": -0.216,
      "nino": 0.132,
      "pdo": -0.491,
      "iod": -0.143,
      "anino": -0.309,
      "ismr": 11.876
    }
  },
  {
    "year": 1908,
    "month": 12,
    "data": {
      "nao": -0.202,
      "amo": -0.226,
      "nino": -0.276,
      "pdo": -0.57,
      "iod": 0.079,
      "anino": -0.458,
      "ismr": 11.876
    }
  },
  {
    "year": 1909,
    "month": 1,
    "data": {
      "nao": -0.182,
      "amo": -0.21,
      "nino": -0.86,
      "pdo": -0.452,
      "iod": -0.473,
      "anino": -0.238,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 2,
    "data": {
      "nao": -0.221,
      "amo": -0.251,
      "nino": -1.028,
      "pdo": -0.472,
      "iod": -0.221,
      "anino": -0.304,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 3,
    "data": {
      "nao": -0.223,
      "amo": -0.228,
      "nino": -0.644,
      "pdo": -0.556,
      "iod": -0.278,
      "anino": -0.333,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 4,
    "data": {
      "nao": -0.222,
      "amo": -0.233,
      "nino": -0.61,
      "pdo": -0.46,
      "iod": -0.311,
      "anino": -0.36,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 5,
    "data": {
      "nao": -0.206,
      "amo": -0.184,
      "nino": -0.721,
      "pdo": -0.381,
      "iod": -0.377,
      "anino": -0.271,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 6,
    "data": {
      "nao": -0.249,
      "amo": -0.251,
      "nino": -0.817,
      "pdo": -0.23,
      "iod": -0.53,
      "anino": -0.338,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 7,
    "data": {
      "nao": -0.335,
      "amo": -0.279,
      "nino": -0.671,
      "pdo": -0.308,
      "iod": -0.449,
      "anino": -0.305,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 8,
    "data": {
      "nao": -0.266,
      "amo": -0.201,
      "nino": -0.684,
      "pdo": -0.586,
      "iod": -0.63,
      "anino": -0.304,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 9,
    "data": {
      "nao": -0.17,
      "amo": -0.176,
      "nino": -0.734,
      "pdo": -0.527,
      "iod": -0.357,
      "anino": -0.299,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 10,
    "data": {
      "nao": -0.226,
      "amo": -0.256,
      "nino": -0.619,
      "pdo": -0.604,
      "iod": 0.115,
      "anino": -0.482,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 11,
    "data": {
      "nao": -0.23,
      "amo": -0.244,
      "nino": -1.078,
      "pdo": -0.624,
      "iod": 0.0,
      "anino": -0.288,
      "ismr": 9.96
    }
  },
  {
    "year": 1909,
    "month": 12,
    "data": {
      "nao": -0.197,
      "amo": -0.212,
      "nino": -1.16,
      "pdo": -0.631,
      "iod": -0.441,
      "anino": -0.15,
      "ismr": 9.96
    }
  },
  {
    "year": 1910,
    "month": 1,
    "data": {
      "nao": -0.271,
      "amo": -0.245,
      "nino": -0.887,
      "pdo": -0.128,
      "iod": -0.052,
      "anino": -0.33,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 2,
    "data": {
      "nao": -0.23,
      "amo": -0.244,
      "nino": -1.027,
      "pdo": -0.163,
      "iod": -0.084,
      "anino": -0.515,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 3,
    "data": {
      "nao": -0.205,
      "amo": -0.267,
      "nino": -0.903,
      "pdo": -0.443,
      "iod": -0.253,
      "anino": -0.618,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 4,
    "data": {
      "nao": -0.197,
      "amo": -0.265,
      "nino": -1.006,
      "pdo": -0.368,
      "iod": -0.233,
      "anino": -0.577,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 5,
    "data": {
      "nao": -0.242,
      "amo": -0.295,
      "nino": -0.992,
      "pdo": -0.155,
      "iod": -0.182,
      "anino": -0.607,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 6,
    "data": {
      "nao": -0.268,
      "amo": -0.298,
      "nino": -0.698,
      "pdo": -0.376,
      "iod": -0.209,
      "anino": -0.683,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 7,
    "data": {
      "nao": -0.33,
      "amo": -0.319,
      "nino": -0.656,
      "pdo": -0.435,
      "iod": -0.212,
      "anino": -0.747,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 8,
    "data": {
      "nao": -0.345,
      "amo": -0.307,
      "nino": -0.79,
      "pdo": -0.27,
      "iod": -0.356,
      "anino": -0.754,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 9,
    "data": {
      "nao": -0.323,
      "amo": -0.219,
      "nino": -0.905,
      "pdo": -0.171,
      "iod": -0.562,
      "anino": -0.476,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 10,
    "data": {
      "nao": -0.129,
      "amo": -0.135,
      "nino": -0.965,
      "pdo": -0.444,
      "iod": -0.332,
      "anino": -0.359,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 11,
    "data": {
      "nao": -0.269,
      "amo": -0.249,
      "nino": -0.949,
      "pdo": -0.325,
      "iod": -0.046,
      "anino": -0.445,
      "ismr": 21.37
    }
  },
  {
    "year": 1910,
    "month": 12,
    "data": {
      "nao": -0.29,
      "amo": -0.223,
      "nino": -0.786,
      "pdo": -0.171,
      "iod": 0.101,
      "anino": -0.241,
      "ismr": 21.37
    }
  },
  {
    "year": 1911,
    "month": 1,
    "data": {
      "nao": -0.198,
      "amo": -0.244,
      "nino": -0.335,
      "pdo": -0.343,
      "iod": -0.01,
      "anino": -0.42,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 2,
    "data": {
      "nao": -0.212,
      "amo": -0.268,
      "nino": -0.442,
      "pdo": -0.363,
      "iod": -0.228,
      "anino": -0.586,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 3,
    "data": {
      "nao": -0.206,
      "amo": -0.29,
      "nino": -0.587,
      "pdo": -0.338,
      "iod": -0.45,
      "anino": -0.588,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 4,
    "data": {
      "nao": -0.266,
      "amo": -0.317,
      "nino": -0.617,
      "pdo": -0.494,
      "iod": -0.381,
      "anino": -0.48,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 5,
    "data": {
      "nao": -0.245,
      "amo": -0.283,
      "nino": -0.454,
      "pdo": -0.437,
      "iod": -0.281,
      "anino": -0.436,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 6,
    "data": {
      "nao": -0.24,
      "amo": -0.26,
      "nino": -0.338,
      "pdo": -0.518,
      "iod": -0.499,
      "anino": -0.576,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 7,
    "data": {
      "nao": -0.244,
      "amo": -0.197,
      "nino": -0.329,
      "pdo": -0.595,
      "iod": -0.287,
      "anino": -0.577,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 8,
    "data": {
      "nao": -0.112,
      "amo": -0.1,
      "nino": -0.022,
      "pdo": -0.686,
      "iod": -0.139,
      "anino": -0.567,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 9,
    "data": {
      "nao": -0.148,
      "amo": -0.149,
      "nino": -0.054,
      "pdo": -0.474,
      "iod": -0.16,
      "anino": -0.512,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 10,
    "data": {
      "nao": -0.245,
      "amo": -0.216,
      "nino": -0.985,
      "pdo": -0.365,
      "iod": -0.597,
      "anino": -0.448,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 11,
    "data": {
      "nao": -0.217,
      "amo": -0.183,
      "nino": -0.727,
      "pdo": -0.559,
      "iod": -0.431,
      "anino": -0.22,
      "ismr": -28.271
    }
  },
  {
    "year": 1911,
    "month": 12,
    "data": {
      "nao": -0.198,
      "amo": -0.226,
      "nino": -0.5,
      "pdo": -0.554,
      "iod": -0.264,
      "anino": -0.408,
      "ismr": -28.271
    }
  },
  {
    "year": 1912,
    "month": 1,
    "data": {
      "nao": -0.193,
      "amo": -0.227,
      "nino": 1.2,
      "pdo": -0.34,
      "iod": -0.386,
      "anino": -0.484,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 2,
    "data": {
      "nao": -0.199,
      "amo": -0.223,
      "nino": 0.92,
      "pdo": -0.263,
      "iod": -0.059,
      "anino": -0.39,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 3,
    "data": {
      "nao": -0.14,
      "amo": -0.184,
      "nino": 0.609,
      "pdo": -0.126,
      "iod": -0.243,
      "anino": -0.488,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 4,
    "data": {
      "nao": -0.187,
      "amo": -0.207,
      "nino": 0.597,
      "pdo": -0.161,
      "iod": -0.083,
      "anino": -0.506,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 5,
    "data": {
      "nao": -0.191,
      "amo": -0.193,
      "nino": 0.25,
      "pdo": -0.248,
      "iod": -0.217,
      "anino": -0.547,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 6,
    "data": {
      "nao": -0.227,
      "amo": -0.229,
      "nino": 0.38,
      "pdo": -0.264,
      "iod": 0.054,
      "anino": -0.561,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 7,
    "data": {
      "nao": -0.292,
      "amo": -0.291,
      "nino": 0.637,
      "pdo": -0.291,
      "iod": -0.069,
      "anino": -0.407,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 8,
    "data": {
      "nao": -0.43,
      "amo": -0.424,
      "nino": 0.789,
      "pdo": -0.377,
      "iod": -0.264,
      "anino": -0.523,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 9,
    "data": {
      "nao": -0.402,
      "amo": -0.37,
      "nino": 0.705,
      "pdo": -0.583,
      "iod": -0.101,
      "anino": -0.355,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 10,
    "data": {
      "nao": -0.173,
      "amo": -0.199,
      "nino": 0.44,
      "pdo": -0.447,
      "iod": -0.217,
      "anino": -0.412,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 11,
    "data": {
      "nao": -0.165,
      "amo": -0.212,
      "nino": 1.41,
      "pdo": -0.301,
      "iod": -0.248,
      "anino": -0.436,
      "ismr": -10.887
    }
  },
  {
    "year": 1912,
    "month": 12,
    "data": {
      "nao": -0.137,
      "amo": -0.19,
      "nino": 1.052,
      "pdo": -0.349,
      "iod": -0.361,
      "anino": -0.513,
      "ismr": -10.887
    }
  },
  {
    "year": 1913,
    "month": 1,
    "data": {
      "nao": -0.168,
      "amo": -0.242,
      "nino": 0.198,
      "pdo": -0.359,
      "iod": -0.106,
      "anino": -0.688,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 2,
    "data": {
      "nao": -0.149,
      "amo": -0.231,
      "nino": 0.185,
      "pdo": -0.315,
      "iod": 0.098,
      "anino": -0.686,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 3,
    "data": {
      "nao": -0.155,
      "amo": -0.249,
      "nino": 0.021,
      "pdo": -0.229,
      "iod": -0.136,
      "anino": -0.809,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 4,
    "data": {
      "nao": -0.229,
      "amo": -0.329,
      "nino": -0.102,
      "pdo": -0.143,
      "iod": -0.174,
      "anino": -0.883,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 5,
    "data": {
      "nao": -0.277,
      "amo": -0.36,
      "nino": 0.104,
      "pdo": -0.247,
      "iod": -0.026,
      "anino": -0.845,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 6,
    "data": {
      "nao": -0.378,
      "amo": -0.425,
      "nino": 0.174,
      "pdo": -0.451,
      "iod": 0.167,
      "anino": -0.898,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 7,
    "data": {
      "nao": -0.403,
      "amo": -0.382,
      "nino": 0.375,
      "pdo": -0.577,
      "iod": 0.089,
      "anino": -0.737,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 8,
    "data": {
      "nao": -0.388,
      "amo": -0.349,
      "nino": 0.355,
      "pdo": -0.589,
      "iod": -0.097,
      "anino": -0.829,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 9,
    "data": {
      "nao": -0.266,
      "amo": -0.279,
      "nino": 0.372,
      "pdo": -0.667,
      "iod": -0.121,
      "anino": -0.788,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 10,
    "data": {
      "nao": -0.315,
      "amo": -0.33,
      "nino": 0.287,
      "pdo": -0.476,
      "iod": 0.074,
      "anino": -0.474,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 11,
    "data": {
      "nao": -0.294,
      "amo": -0.296,
      "nino": 0.244,
      "pdo": -0.608,
      "iod": -0.294,
      "anino": -0.342,
      "ismr": -16.227
    }
  },
  {
    "year": 1913,
    "month": 12,
    "data": {
      "nao": -0.219,
      "amo": -0.27,
      "nino": -0.21,
      "pdo": -0.561,
      "iod": -0.352,
      "anino": -0.497,
      "ismr": -16.227
    }
  },
  {
    "year": 1914,
    "month": 1,
    "data": {
      "nao": -0.178,
      "amo": -0.166,
      "nino": 0.578,
      "pdo": -0.467,
      "iod": -0.085,
      "anino": -0.198,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 2,
    "data": {
      "nao": -0.179,
      "amo": -0.215,
      "nino": 0.658,
      "pdo": -0.337,
      "iod": 0.025,
      "anino": -0.369,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 3,
    "data": {
      "nao": -0.165,
      "amo": -0.23,
      "nino": 0.601,
      "pdo": -0.32,
      "iod": -0.132,
      "anino": -0.435,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 4,
    "data": {
      "nao": -0.14,
      "amo": -0.211,
      "nino": 0.501,
      "pdo": -0.304,
      "iod": -0.142,
      "anino": -0.514,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 5,
    "data": {
      "nao": -0.151,
      "amo": -0.178,
      "nino": 0.448,
      "pdo": -0.259,
      "iod": -0.007,
      "anino": -0.437,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 6,
    "data": {
      "nao": -0.238,
      "amo": -0.259,
      "nino": 0.673,
      "pdo": -0.357,
      "iod": 0.516,
      "anino": -0.59,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 7,
    "data": {
      "nao": -0.262,
      "amo": -0.295,
      "nino": 0.793,
      "pdo": -0.252,
      "iod": 0.445,
      "anino": -0.587,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 8,
    "data": {
      "nao": -0.305,
      "amo": -0.298,
      "nino": 0.892,
      "pdo": -0.267,
      "iod": 0.24,
      "anino": -0.502,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 9,
    "data": {
      "nao": -0.175,
      "amo": -0.19,
      "nino": 0.847,
      "pdo": -0.258,
      "iod": 0.231,
      "anino": -0.324,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 10,
    "data": {
      "nao": -0.195,
      "amo": -0.255,
      "nino": -0.06,
      "pdo": -0.463,
      "iod": 0.076,
      "anino": -0.644,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 11,
    "data": {
      "nao": -0.197,
      "amo": -0.25,
      "nino": 0.541,
      "pdo": -0.551,
      "iod": 0.015,
      "anino": -0.619,
      "ismr": 12.182
    }
  },
  {
    "year": 1914,
    "month": 12,
    "data": {
      "nao": -0.185,
      "amo": -0.212,
      "nino": 0.356,
      "pdo": -0.548,
      "iod": -0.214,
      "anino": -0.489,
      "ismr": 12.182
    }
  },
  {
    "year": 1915,
    "month": 1,
    "data": {
      "nao": -0.114,
      "amo": -0.126,
      "nino": 0.736,
      "pdo": -0.392,
      "iod": -0.514,
      "anino": -0.057,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 2,
    "data": {
      "nao": -0.123,
      "amo": -0.113,
      "nino": 0.749,
      "pdo": -0.398,
      "iod": -0.564,
      "anino": -0.01,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 3,
    "data": {
      "nao": -0.091,
      "amo": -0.044,
      "nino": 0.605,
      "pdo": -0.328,
      "iod": -0.314,
      "anino": 0.368,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 4,
    "data": {
      "nao": -0.126,
      "amo": -0.064,
      "nino": 0.122,
      "pdo": -0.328,
      "iod": -0.145,
      "anino": 0.311,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 5,
    "data": {
      "nao": -0.038,
      "amo": 0.039,
      "nino": 0.509,
      "pdo": -0.499,
      "iod": -0.085,
      "anino": 0.404,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 6,
    "data": {
      "nao": -0.049,
      "amo": 0.087,
      "nino": 0.452,
      "pdo": -0.369,
      "iod": -0.037,
      "anino": 0.337,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 7,
    "data": {
      "nao": -0.081,
      "amo": 0.078,
      "nino": 0.338,
      "pdo": -0.195,
      "iod": -0.338,
      "anino": 0.398,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 8,
    "data": {
      "nao": -0.057,
      "amo": 0.049,
      "nino": 0.059,
      "pdo": 0.004,
      "iod": -0.199,
      "anino": 0.346,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 9,
    "data": {
      "nao": -0.086,
      "amo": 0.011,
      "nino": -0.031,
      "pdo": 0.053,
      "iod": 0.013,
      "anino": 0.308,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 10,
    "data": {
      "nao": -0.102,
      "amo": -0.114,
      "nino": 0.419,
      "pdo": -0.194,
      "iod": 0.086,
      "anino": -0.258,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 11,
    "data": {
      "nao": -0.151,
      "amo": -0.155,
      "nino": 0.662,
      "pdo": -0.32,
      "iod": -0.251,
      "anino": -0.162,
      "ismr": -17.159
    }
  },
  {
    "year": 1915,
    "month": 12,
    "data": {
      "nao": -0.184,
      "amo": -0.181,
      "nino": 0.761,
      "pdo": -0.289,
      "iod": -0.58,
      "anino": -0.147,
      "ismr": -17.159
    }
  },
  {
    "year": 1916,
    "month": 1,
    "data": {
      "nao": -0.095,
      "amo": -0.085,
      "nino": -1.025,
      "pdo": -0.289,
      "iod": 0.414,
      "anino": -0.057,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 2,
    "data": {
      "nao": -0.057,
      "amo": -0.078,
      "nino": -0.343,
      "pdo": -0.27,
      "iod": 0.113,
      "anino": -0.147,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 3,
    "data": {
      "nao": -0.074,
      "amo": -0.113,
      "nino": -0.375,
      "pdo": -0.333,
      "iod": 0.312,
      "anino": -0.187,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 4,
    "data": {
      "nao": -0.054,
      "amo": -0.084,
      "nino": -0.496,
      "pdo": -0.313,
      "iod": 0.262,
      "anino": -0.206,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 5,
    "data": {
      "nao": -0.056,
      "amo": -0.015,
      "nino": -0.65,
      "pdo": -0.451,
      "iod": -0.032,
      "anino": 0.115,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 6,
    "data": {
      "nao": -0.083,
      "amo": -0.018,
      "nino": -0.636,
      "pdo": -0.371,
      "iod": -0.161,
      "anino": -0.06,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 7,
    "data": {
      "nao": -0.168,
      "amo": -0.042,
      "nino": -1.123,
      "pdo": -0.309,
      "iod": -0.035,
      "anino": -0.11,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 8,
    "data": {
      "nao": -0.161,
      "amo": -0.068,
      "nino": -1.381,
      "pdo": -0.213,
      "iod": -0.219,
      "anino": -0.121,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 9,
    "data": {
      "nao": -0.131,
      "amo": -0.103,
      "nino": -1.039,
      "pdo": -0.119,
      "iod": -0.448,
      "anino": -0.204,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 10,
    "data": {
      "nao": -0.076,
      "amo": -0.053,
      "nino": 0.297,
      "pdo": -0.036,
      "iod": -0.071,
      "anino": 0.062,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 11,
    "data": {
      "nao": -0.063,
      "amo": -0.039,
      "nino": 0.201,
      "pdo": -0.137,
      "iod": 0.085,
      "anino": 0.077,
      "ismr": 25.351
    }
  },
  {
    "year": 1916,
    "month": 12,
    "data": {
      "nao": -0.118,
      "amo": -0.071,
      "nino": -0.81,
      "pdo": -0.247,
      "iod": 0.15,
      "anino": 0.146,
      "ismr": 25.351
    }
  },
  {
    "year": 1917,
    "month": 1,
    "data": {
      "nao": -0.156,
      "amo": -0.215,
      "nino": -1.621,
      "pdo": -0.268,
      "iod": 0.2,
      "anino": -0.515,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 2,
    "data": {
      "nao": -0.19,
      "amo": -0.251,
      "nino": -0.937,
      "pdo": -0.1,
      "iod": 0.255,
      "anino": -0.507,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 3,
    "data": {
      "nao": -0.182,
      "amo": -0.216,
      "nino": -0.903,
      "pdo": -0.036,
      "iod": 0.115,
      "anino": -0.504,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 4,
    "data": {
      "nao": -0.164,
      "amo": -0.135,
      "nino": -0.967,
      "pdo": 0.085,
      "iod": -0.195,
      "anino": -0.212,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 5,
    "data": {
      "nao": -0.204,
      "amo": -0.14,
      "nino": -0.96,
      "pdo": -0.091,
      "iod": -0.103,
      "anino": -0.114,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 6,
    "data": {
      "nao": -0.206,
      "amo": -0.135,
      "nino": -0.394,
      "pdo": -0.043,
      "iod": -0.187,
      "anino": -0.086,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 7,
    "data": {
      "nao": -0.205,
      "amo": -0.108,
      "nino": -0.096,
      "pdo": -0.117,
      "iod": 0.08,
      "anino": -0.205,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 8,
    "data": {
      "nao": -0.134,
      "amo": -0.09,
      "nino": -0.497,
      "pdo": -0.218,
      "iod": -0.209,
      "anino": -0.294,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 9,
    "data": {
      "nao": -0.242,
      "amo": -0.22,
      "nino": -0.486,
      "pdo": -0.028,
      "iod": 0.075,
      "anino": -0.561,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 10,
    "data": {
      "nao": -0.115,
      "amo": -0.098,
      "nino": -1.76,
      "pdo": -0.253,
      "iod": -0.506,
      "anino": -0.304,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 11,
    "data": {
      "nao": -0.177,
      "amo": -0.208,
      "nino": -2.16,
      "pdo": -0.154,
      "iod": -0.293,
      "anino": -0.545,
      "ismr": 38.76
    }
  },
  {
    "year": 1917,
    "month": 12,
    "data": {
      "nao": -0.148,
      "amo": -0.19,
      "nino": -2.377,
      "pdo": -0.214,
      "iod": 0.047,
      "anino": -0.444,
      "ismr": 38.76
    }
  },
  {
    "year": 1918,
    "month": 1,
    "data": {
      "nao": -0.165,
      "amo": -0.154,
      "nino": -1.155,
      "pdo": -0.023,
      "iod": 0.172,
      "anino": -0.007,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 2,
    "data": {
      "nao": -0.15,
      "amo": -0.181,
      "nino": -1.151,
      "pdo": -0.07,
      "iod": 0.682,
      "anino": -0.475,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 3,
    "data": {
      "nao": -0.127,
      "amo": -0.169,
      "nino": -0.761,
      "pdo": -0.061,
      "iod": 0.394,
      "anino": -0.555,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 4,
    "data": {
      "nao": -0.064,
      "amo": -0.108,
      "nino": -0.511,
      "pdo": -0.164,
      "iod": -0.205,
      "anino": -0.431,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 5,
    "data": {
      "nao": -0.137,
      "amo": -0.12,
      "nino": -0.278,
      "pdo": -0.143,
      "iod": -0.255,
      "anino": -0.257,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 6,
    "data": {
      "nao": -0.256,
      "amo": -0.217,
      "nino": -0.222,
      "pdo": -0.107,
      "iod": -0.106,
      "anino": -0.414,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 7,
    "data": {
      "nao": -0.338,
      "amo": -0.225,
      "nino": 0.148,
      "pdo": -0.106,
      "iod": -0.001,
      "anino": -0.289,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 8,
    "data": {
      "nao": -0.35,
      "amo": -0.268,
      "nino": 0.575,
      "pdo": -0.183,
      "iod": 0.286,
      "anino": -0.374,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 9,
    "data": {
      "nao": -0.234,
      "amo": -0.169,
      "nino": 0.472,
      "pdo": -0.252,
      "iod": 0.223,
      "anino": -0.242,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 10,
    "data": {
      "nao": -0.254,
      "amo": -0.212,
      "nino": -1.024,
      "pdo": -0.017,
      "iod": -0.422,
      "anino": -0.52,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 11,
    "data": {
      "nao": -0.184,
      "amo": -0.152,
      "nino": -1.922,
      "pdo": -0.355,
      "iod": -0.732,
      "anino": -0.346,
      "ismr": -49.581
    }
  },
  {
    "year": 1918,
    "month": 12,
    "data": {
      "nao": -0.155,
      "amo": -0.135,
      "nino": -1.288,
      "pdo": -0.1,
      "iod": -0.175,
      "anino": -0.164,
      "ismr": -49.581
    }
  },
  {
    "year": 1919,
    "month": 1,
    "data": {
      "nao": -0.058,
      "amo": -0.036,
      "nino": 0.318,
      "pdo": -0.6,
      "iod": 0.167,
      "anino": -0.172,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 2,
    "data": {
      "nao": -0.028,
      "amo": 0.023,
      "nino": 0.429,
      "pdo": -0.446,
      "iod": -0.055,
      "anino": 0.241,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 3,
    "data": {
      "nao": -0.06,
      "amo": -0.042,
      "nino": 0.05,
      "pdo": -0.33,
      "iod": -0.268,
      "anino": 0.047,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 4,
    "data": {
      "nao": -0.085,
      "amo": -0.037,
      "nino": 0.42,
      "pdo": -0.25,
      "iod": -0.047,
      "anino": 0.233,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 5,
    "data": {
      "nao": -0.13,
      "amo": -0.12,
      "nino": 0.327,
      "pdo": -0.406,
      "iod": 0.013,
      "anino": -0.118,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 6,
    "data": {
      "nao": -0.2,
      "amo": -0.18,
      "nino": 0.262,
      "pdo": -0.354,
      "iod": -0.092,
      "anino": -0.261,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 7,
    "data": {
      "nao": -0.27,
      "amo": -0.231,
      "nino": 0.296,
      "pdo": -0.326,
      "iod": -0.15,
      "anino": -0.309,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 8,
    "data": {
      "nao": -0.201,
      "amo": -0.136,
      "nino": -0.237,
      "pdo": -0.336,
      "iod": -0.113,
      "anino": -0.36,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 9,
    "data": {
      "nao": -0.168,
      "amo": -0.098,
      "nino": 0.424,
      "pdo": -0.364,
      "iod": -0.178,
      "anino": -0.142,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 10,
    "data": {
      "nao": -0.203,
      "amo": -0.131,
      "nino": 0.292,
      "pdo": -0.324,
      "iod": 0.528,
      "anino": -0.128,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 11,
    "data": {
      "nao": -0.087,
      "amo": -0.026,
      "nino": 0.425,
      "pdo": -0.45,
      "iod": 0.325,
      "anino": 0.02,
      "ismr": 8.854
    }
  },
  {
    "year": 1919,
    "month": 12,
    "data": {
      "nao": -0.024,
      "amo": 0.011,
      "nino": 0.759,
      "pdo": -0.645,
      "iod": 0.008,
      "anino": -0.048,
      "ismr": 8.854
    }
  },
  {
    "year": 1920,
    "month": 1,
    "data": {
      "nao": -0.15,
      "amo": -0.158,
      "nino": 0.301,
      "pdo": -0.278,
      "iod": 0.391,
      "anino": -0.491,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 2,
    "data": {
      "nao": -0.119,
      "amo": -0.162,
      "nino": 0.181,
      "pdo": -0.156,
      "iod": 0.352,
      "anino": -0.529,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 3,
    "data": {
      "nao": -0.086,
      "amo": -0.131,
      "nino": -0.086,
      "pdo": -0.222,
      "iod": 0.155,
      "anino": -0.543,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 4,
    "data": {
      "nao": -0.014,
      "amo": -0.096,
      "nino": -0.201,
      "pdo": -0.2,
      "iod": -0.031,
      "anino": -0.596,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 5,
    "data": {
      "nao": -0.036,
      "amo": -0.116,
      "nino": -0.236,
      "pdo": 0.082,
      "iod": -0.018,
      "anino": -0.553,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 6,
    "data": {
      "nao": -0.096,
      "amo": -0.158,
      "nino": -0.085,
      "pdo": 0.094,
      "iod": -0.053,
      "anino": -0.413,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 7,
    "data": {
      "nao": -0.147,
      "amo": -0.229,
      "nino": -0.228,
      "pdo": 0.096,
      "iod": -0.333,
      "anino": -0.639,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 8,
    "data": {
      "nao": -0.254,
      "amo": -0.248,
      "nino": -0.112,
      "pdo": -0.004,
      "iod": -0.121,
      "anino": -0.601,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 9,
    "data": {
      "nao": -0.18,
      "amo": -0.183,
      "nino": -0.371,
      "pdo": -0.263,
      "iod": -0.265,
      "anino": -0.422,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 10,
    "data": {
      "nao": -0.086,
      "amo": -0.048,
      "nino": 0.554,
      "pdo": -0.2,
      "iod": 0.088,
      "anino": -0.088,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 11,
    "data": {
      "nao": -0.162,
      "amo": -0.145,
      "nino": 0.542,
      "pdo": -0.244,
      "iod": -0.015,
      "anino": -0.197,
      "ismr": -32.512
    }
  },
  {
    "year": 1920,
    "month": 12,
    "data": {
      "nao": -0.165,
      "amo": -0.195,
      "nino": 0.318,
      "pdo": -0.33,
      "iod": -0.008,
      "anino": -0.428,
      "ismr": -32.512
    }
  },
  {
    "year": 1921,
    "month": 1,
    "data": {
      "nao": -0.122,
      "amo": -0.139,
      "nino": -0.846,
      "pdo": -0.346,
      "iod": -0.341,
      "anino": -0.384,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 2,
    "data": {
      "nao": -0.098,
      "amo": -0.12,
      "nino": -0.907,
      "pdo": -0.134,
      "iod": -0.14,
      "anino": -0.357,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 3,
    "data": {
      "nao": -0.086,
      "amo": -0.161,
      "nino": -1.073,
      "pdo": -0.053,
      "iod": 0.18,
      "anino": -0.604,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 4,
    "data": {
      "nao": -0.102,
      "amo": -0.147,
      "nino": -0.417,
      "pdo": -0.032,
      "iod": -0.161,
      "anino": -0.484,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 5,
    "data": {
      "nao": -0.076,
      "amo": -0.135,
      "nino": -0.476,
      "pdo": 0.01,
      "iod": 0.098,
      "anino": -0.638,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 6,
    "data": {
      "nao": -0.127,
      "amo": -0.127,
      "nino": -0.76,
      "pdo": 0.056,
      "iod": -0.098,
      "anino": -0.598,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 7,
    "data": {
      "nao": -0.148,
      "amo": -0.068,
      "nino": -0.639,
      "pdo": 0.08,
      "iod": -0.058,
      "anino": -0.517,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 8,
    "data": {
      "nao": -0.234,
      "amo": -0.17,
      "nino": -0.203,
      "pdo": 0.21,
      "iod": -0.44,
      "anino": -0.355,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 9,
    "data": {
      "nao": -0.16,
      "amo": -0.128,
      "nino": -0.21,
      "pdo": 0.194,
      "iod": -0.277,
      "anino": -0.422,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 10,
    "data": {
      "nao": -0.094,
      "amo": -0.131,
      "nino": -0.403,
      "pdo": -0.126,
      "iod": 0.173,
      "anino": -0.371,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 11,
    "data": {
      "nao": -0.126,
      "amo": -0.192,
      "nino": -0.306,
      "pdo": -0.124,
      "iod": -0.161,
      "anino": -0.492,
      "ismr": 4.198
    }
  },
  {
    "year": 1921,
    "month": 12,
    "data": {
      "nao": -0.117,
      "amo": -0.159,
      "nino": -0.814,
      "pdo": -0.222,
      "iod": -0.469,
      "anino": -0.315,
      "ismr": 4.198
    }
  },
  {
    "year": 1922,
    "month": 1,
    "data": {
      "nao": -0.109,
      "amo": -0.097,
      "nino": -0.751,
      "pdo": -0.194,
      "iod": -0.212,
      "anino": -0.197,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 2,
    "data": {
      "nao": -0.12,
      "amo": -0.147,
      "nino": -0.396,
      "pdo": -0.114,
      "iod": -0.141,
      "anino": -0.4,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 3,
    "data": {
      "nao": -0.101,
      "amo": -0.158,
      "nino": -0.064,
      "pdo": -0.037,
      "iod": -0.031,
      "anino": -0.529,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 4,
    "data": {
      "nao": -0.146,
      "amo": -0.222,
      "nino": -0.204,
      "pdo": 0.077,
      "iod": -0.192,
      "anino": -0.628,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 5,
    "data": {
      "nao": -0.163,
      "amo": -0.216,
      "nino": -0.46,
      "pdo": -0.036,
      "iod": -0.218,
      "anino": -0.672,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 6,
    "data": {
      "nao": -0.146,
      "amo": -0.183,
      "nino": -0.395,
      "pdo": -0.191,
      "iod": 0.084,
      "anino": -0.665,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 7,
    "data": {
      "nao": -0.215,
      "amo": -0.245,
      "nino": -0.28,
      "pdo": -0.026,
      "iod": -0.089,
      "anino": -0.559,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 8,
    "data": {
      "nao": -0.213,
      "amo": -0.252,
      "nino": -0.27,
      "pdo": -0.042,
      "iod": -0.038,
      "anino": -0.604,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 9,
    "data": {
      "nao": -0.194,
      "amo": -0.251,
      "nino": -0.53,
      "pdo": -0.092,
      "iod": -0.083,
      "anino": -0.625,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 10,
    "data": {
      "nao": -0.074,
      "amo": -0.023,
      "nino": -0.95,
      "pdo": -0.03,
      "iod": -0.212,
      "anino": -0.263,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 11,
    "data": {
      "nao": -0.158,
      "amo": -0.122,
      "nino": -0.83,
      "pdo": -0.085,
      "iod": -0.123,
      "anino": -0.379,
      "ismr": 5.007
    }
  },
  {
    "year": 1922,
    "month": 12,
    "data": {
      "nao": -0.117,
      "amo": -0.08,
      "nino": -0.348,
      "pdo": -0.168,
      "iod": -0.131,
      "anino": -0.156,
      "ismr": 5.007
    }
  },
  {
    "year": 1923,
    "month": 1,
    "data": {
      "nao": -0.172,
      "amo": -0.189,
      "nino": -0.636,
      "pdo": -0.178,
      "iod": 0.015,
      "anino": -0.586,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 2,
    "data": {
      "nao": -0.129,
      "amo": -0.203,
      "nino": -0.731,
      "pdo": -0.187,
      "iod": -0.04,
      "anino": -0.676,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 3,
    "data": {
      "nao": -0.081,
      "amo": -0.182,
      "nino": -0.407,
      "pdo": -0.26,
      "iod": 0.13,
      "anino": -0.621,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 4,
    "data": {
      "nao": -0.096,
      "amo": -0.243,
      "nino": -0.102,
      "pdo": -0.064,
      "iod": -0.032,
      "anino": -0.853,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 5,
    "data": {
      "nao": -0.062,
      "amo": -0.163,
      "nino": -0.034,
      "pdo": -0.076,
      "iod": 0.032,
      "anino": -0.662,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 6,
    "data": {
      "nao": -0.203,
      "amo": -0.253,
      "nino": 0.102,
      "pdo": -0.158,
      "iod": 0.117,
      "anino": -0.762,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 7,
    "data": {
      "nao": -0.238,
      "amo": -0.227,
      "nino": 0.104,
      "pdo": -0.207,
      "iod": 0.125,
      "anino": -0.605,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 8,
    "data": {
      "nao": -0.279,
      "amo": -0.28,
      "nino": 0.137,
      "pdo": -0.126,
      "iod": 0.255,
      "anino": -0.672,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 9,
    "data": {
      "nao": -0.23,
      "amo": -0.235,
      "nino": 0.438,
      "pdo": -0.081,
      "iod": 0.459,
      "anino": -0.605,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 10,
    "data": {
      "nao": -0.159,
      "amo": -0.206,
      "nino": -0.582,
      "pdo": -0.284,
      "iod": 0.045,
      "anino": -0.495,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 11,
    "data": {
      "nao": -0.172,
      "amo": -0.193,
      "nino": -0.388,
      "pdo": -0.062,
      "iod": -0.16,
      "anino": -0.431,
      "ismr": -6.484
    }
  },
  {
    "year": 1923,
    "month": 12,
    "data": {
      "nao": -0.176,
      "amo": -0.19,
      "nino": -0.629,
      "pdo": -0.166,
      "iod": 0.031,
      "anino": -0.379,
      "ismr": -6.484
    }
  },
  {
    "year": 1924,
    "month": 1,
    "data": {
      "nao": -0.064,
      "amo": -0.045,
      "nino": 0.162,
      "pdo": -0.205,
      "iod": -0.374,
      "anino": -0.063,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 2,
    "data": {
      "nao": -0.092,
      "amo": -0.113,
      "nino": 0.185,
      "pdo": -0.2,
      "iod": -0.227,
      "anino": -0.139,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 3,
    "data": {
      "nao": -0.079,
      "amo": -0.062,
      "nino": -0.164,
      "pdo": -0.176,
      "iod": -0.01,
      "anino": 0.01,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 4,
    "data": {
      "nao": -0.089,
      "amo": -0.048,
      "nino": -0.448,
      "pdo": -0.098,
      "iod": -0.005,
      "anino": 0.045,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 5,
    "data": {
      "nao": -0.02,
      "amo": -0.001,
      "nino": -0.69,
      "pdo": -0.111,
      "iod": -0.12,
      "anino": -0.2,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 6,
    "data": {
      "nao": -0.058,
      "amo": -0.058,
      "nino": -0.602,
      "pdo": 0.006,
      "iod": -0.097,
      "anino": -0.241,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 7,
    "data": {
      "nao": -0.094,
      "amo": -0.11,
      "nino": -0.649,
      "pdo": 0.049,
      "iod": 0.037,
      "anino": -0.189,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 8,
    "data": {
      "nao": -0.111,
      "amo": -0.136,
      "nino": -0.46,
      "pdo": 0.145,
      "iod": -0.086,
      "anino": -0.319,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 9,
    "data": {
      "nao": -0.074,
      "amo": -0.101,
      "nino": -1.035,
      "pdo": 0.005,
      "iod": 0.01,
      "anino": -0.328,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 10,
    "data": {
      "nao": -0.149,
      "amo": -0.139,
      "nino": 0.644,
      "pdo": -0.309,
      "iod": 0.419,
      "anino": -0.507,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 11,
    "data": {
      "nao": -0.091,
      "amo": -0.078,
      "nino": 0.826,
      "pdo": -0.169,
      "iod": 0.235,
      "anino": -0.209,
      "ismr": 3.426
    }
  },
  {
    "year": 1924,
    "month": 12,
    "data": {
      "nao": -0.029,
      "amo": 0.002,
      "nino": 0.195,
      "pdo": -0.196,
      "iod": -0.172,
      "anino": -0.074,
      "ismr": 3.426
    }
  },
  {
    "year": 1925,
    "month": 1,
    "data": {
      "nao": -0.081,
      "amo": -0.168,
      "nino": -1.089,
      "pdo": -0.119,
      "iod": -0.228,
      "anino": -0.643,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 2,
    "data": {
      "nao": -0.021,
      "amo": -0.129,
      "nino": -1.103,
      "pdo": -0.146,
      "iod": -0.183,
      "anino": -0.736,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 3,
    "data": {
      "nao": -0.023,
      "amo": -0.119,
      "nino": -0.801,
      "pdo": -0.101,
      "iod": -0.054,
      "anino": -0.519,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 4,
    "data": {
      "nao": -0.047,
      "amo": -0.116,
      "nino": -0.271,
      "pdo": -0.141,
      "iod": 0.269,
      "anino": -0.444,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 5,
    "data": {
      "nao": -0.015,
      "amo": -0.064,
      "nino": -0.226,
      "pdo": 0.002,
      "iod": -0.113,
      "anino": -0.333,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 6,
    "data": {
      "nao": -0.061,
      "amo": -0.108,
      "nino": -0.297,
      "pdo": -0.057,
      "iod": 0.083,
      "anino": -0.436,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 7,
    "data": {
      "nao": -0.069,
      "amo": -0.102,
      "nino": 0.145,
      "pdo": -0.062,
      "iod": 0.181,
      "anino": -0.325,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 8,
    "data": {
      "nao": -0.102,
      "amo": -0.091,
      "nino": 0.31,
      "pdo": -0.02,
      "iod": 0.197,
      "anino": -0.291,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 9,
    "data": {
      "nao": -0.1,
      "amo": -0.094,
      "nino": 0.476,
      "pdo": -0.055,
      "iod": 0.29,
      "anino": -0.336,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 10,
    "data": {
      "nao": -0.063,
      "amo": -0.107,
      "nino": -1.109,
      "pdo": -0.153,
      "iod": 0.22,
      "anino": -0.468,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 11,
    "data": {
      "nao": -0.1,
      "amo": -0.141,
      "nino": -0.804,
      "pdo": -0.172,
      "iod": -0.027,
      "anino": -0.282,
      "ismr": -11.315
    }
  },
  {
    "year": 1925,
    "month": 12,
    "data": {
      "nao": -0.082,
      "amo": -0.137,
      "nino": -0.693,
      "pdo": -0.176,
      "iod": 0.116,
      "anino": -0.343,
      "ismr": -11.315
    }
  },
  {
    "year": 1926,
    "month": 1,
    "data": {
      "nao": -0.028,
      "amo": 0.037,
      "nino": 0.791,
      "pdo": -0.064,
      "iod": 0.123,
      "anino": 0.297,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 2,
    "data": {
      "nao": -0.007,
      "amo": 0.079,
      "nino": 0.769,
      "pdo": -0.137,
      "iod": 0.184,
      "anino": 0.298,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 3,
    "data": {
      "nao": -0.032,
      "amo": 0.022,
      "nino": 0.988,
      "pdo": -0.187,
      "iod": 0.197,
      "anino": 0.156,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 4,
    "data": {
      "nao": 0.0,
      "amo": 0.052,
      "nino": 0.645,
      "pdo": -0.112,
      "iod": -0.096,
      "anino": 0.079,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 5,
    "data": {
      "nao": -0.018,
      "amo": 0.021,
      "nino": 0.446,
      "pdo": -0.197,
      "iod": 0.141,
      "anino": 0.159,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 6,
    "data": {
      "nao": -0.067,
      "amo": -0.036,
      "nino": 0.724,
      "pdo": -0.117,
      "iod": 0.402,
      "anino": 0.124,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 7,
    "data": {
      "nao": -0.098,
      "amo": -0.012,
      "nino": 0.603,
      "pdo": -0.105,
      "iod": 0.191,
      "anino": 0.292,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 8,
    "data": {
      "nao": -0.133,
      "amo": -0.057,
      "nino": 0.221,
      "pdo": 0.072,
      "iod": 0.272,
      "anino": 0.256,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 9,
    "data": {
      "nao": -0.075,
      "amo": 0.005,
      "nino": 0.187,
      "pdo": 0.112,
      "iod": 0.131,
      "anino": 0.182,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 10,
    "data": {
      "nao": -0.097,
      "amo": -0.07,
      "nino": 0.846,
      "pdo": -0.048,
      "iod": 0.304,
      "anino": -0.149,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 11,
    "data": {
      "nao": -0.095,
      "amo": -0.105,
      "nino": 1.203,
      "pdo": -0.066,
      "iod": 0.221,
      "anino": -0.171,
      "ismr": 13.444
    }
  },
  {
    "year": 1926,
    "month": 12,
    "data": {
      "nao": -0.047,
      "amo": -0.006,
      "nino": 1.054,
      "pdo": -0.183,
      "iod": 0.089,
      "anino": 0.182,
      "ismr": 13.444
    }
  },
  {
    "year": 1927,
    "month": 1,
    "data": {
      "nao": -0.002,
      "amo": 0.05,
      "nino": -0.254,
      "pdo": -0.001,
      "iod": -0.139,
      "anino": 0.169,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 2,
    "data": {
      "nao": 0.008,
      "amo": 0.031,
      "nino": 0.067,
      "pdo": -0.171,
      "iod": 0.187,
      "anino": 0.046,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 3,
    "data": {
      "nao": 0.024,
      "amo": 0.033,
      "nino": -0.652,
      "pdo": -0.072,
      "iod": -0.129,
      "anino": -0.014,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 4,
    "data": {
      "nao": 0.029,
      "amo": 0.04,
      "nino": -0.445,
      "pdo": 0.081,
      "iod": 0.053,
      "anino": 0.071,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 5,
    "data": {
      "nao": 0.076,
      "amo": 0.122,
      "nino": -0.534,
      "pdo": -0.116,
      "iod": -0.029,
      "anino": 0.109,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 6,
    "data": {
      "nao": 0.01,
      "amo": 0.065,
      "nino": -0.341,
      "pdo": -0.186,
      "iod": 0.048,
      "anino": 0.059,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 7,
    "data": {
      "nao": 0.057,
      "amo": 0.083,
      "nino": -0.329,
      "pdo": 0.017,
      "iod": 0.03,
      "anino": 0.219,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 8,
    "data": {
      "nao": 0.073,
      "amo": 0.067,
      "nino": 0.116,
      "pdo": 0.176,
      "iod": -0.152,
      "anino": 0.202,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 9,
    "data": {
      "nao": 0.021,
      "amo": 0.027,
      "nino": -0.236,
      "pdo": -0.102,
      "iod": -0.491,
      "anino": 0.318,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 10,
    "data": {
      "nao": -0.012,
      "amo": 0.099,
      "nino": -0.428,
      "pdo": 0.118,
      "iod": 0.207,
      "anino": 0.148,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 11,
    "data": {
      "nao": -0.034,
      "amo": 0.032,
      "nino": -0.071,
      "pdo": 0.078,
      "iod": 0.069,
      "anino": 0.065,
      "ismr": 1.054
    }
  },
  {
    "year": 1927,
    "month": 12,
    "data": {
      "nao": -0.024,
      "amo": 0.024,
      "nino": -0.081,
      "pdo": -0.075,
      "iod": -0.035,
      "anino": 0.098,
      "ismr": 1.054
    }
  },
  {
    "year": 1928,
    "month": 1,
    "data": {
      "nao": -0.071,
      "amo": 0.01,
      "nino": 0.406,
      "pdo": -0.062,
      "iod": 0.113,
      "anino": 0.135,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 2,
    "data": {
      "nao": -0.069,
      "amo": -0.048,
      "nino": 0.221,
      "pdo": -0.21,
      "iod": 0.048,
      "anino": -0.204,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 3,
    "data": {
      "nao": -0.051,
      "amo": -0.065,
      "nino": -0.019,
      "pdo": -0.098,
      "iod": 0.021,
      "anino": -0.277,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 4,
    "data": {
      "nao": -0.011,
      "amo": -0.057,
      "nino": -0.049,
      "pdo": -0.136,
      "iod": 0.125,
      "anino": -0.398,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 5,
    "data": {
      "nao": -0.042,
      "amo": -0.077,
      "nino": -0.047,
      "pdo": -0.206,
      "iod": -0.056,
      "anino": -0.317,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 6,
    "data": {
      "nao": -0.037,
      "amo": -0.046,
      "nino": -0.114,
      "pdo": -0.233,
      "iod": -0.002,
      "anino": -0.114,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 7,
    "data": {
      "nao": 0.01,
      "amo": 0.031,
      "nino": -0.119,
      "pdo": -0.08,
      "iod": -0.217,
      "anino": -0.114,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 8,
    "data": {
      "nao": -0.024,
      "amo": 0.021,
      "nino": -0.495,
      "pdo": -0.148,
      "iod": -0.05,
      "anino": -0.094,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 9,
    "data": {
      "nao": 0.042,
      "amo": 0.027,
      "nino": -0.434,
      "pdo": -0.067,
      "iod": -0.178,
      "anino": -0.081,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 10,
    "data": {
      "nao": 0.016,
      "amo": 0.09,
      "nino": -0.139,
      "pdo": 0.056,
      "iod": -0.329,
      "anino": 0.421,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 11,
    "data": {
      "nao": -0.031,
      "amo": 0.089,
      "nino": -0.136,
      "pdo": 0.045,
      "iod": 0.062,
      "anino": 0.462,
      "ismr": -20.262
    }
  },
  {
    "year": 1928,
    "month": 12,
    "data": {
      "nao": -0.081,
      "amo": 0.033,
      "nino": 0.216,
      "pdo": 0.065,
      "iod": 0.159,
      "anino": 0.299,
      "ismr": -20.262
    }
  },
  {
    "year": 1929,
    "month": 1,
    "data": {
      "nao": -0.042,
      "amo": -0.065,
      "nino": -0.054,
      "pdo": -0.315,
      "iod": -0.117,
      "anino": -0.337,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 2,
    "data": {
      "nao": -0.043,
      "amo": -0.075,
      "nino": -0.278,
      "pdo": -0.157,
      "iod": -0.014,
      "anino": -0.332,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 3,
    "data": {
      "nao": -0.067,
      "amo": -0.085,
      "nino": -0.299,
      "pdo": -0.125,
      "iod": 0.218,
      "anino": -0.38,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 4,
    "data": {
      "nao": -0.058,
      "amo": -0.075,
      "nino": -0.051,
      "pdo": -0.081,
      "iod": 0.166,
      "anino": -0.337,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 5,
    "data": {
      "nao": -0.099,
      "amo": -0.136,
      "nino": -0.025,
      "pdo": 0.013,
      "iod": -0.25,
      "anino": -0.532,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 6,
    "data": {
      "nao": -0.137,
      "amo": -0.164,
      "nino": 0.068,
      "pdo": 0.0,
      "iod": -0.161,
      "anino": -0.44,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 7,
    "data": {
      "nao": -0.187,
      "amo": -0.152,
      "nino": -0.045,
      "pdo": 0.014,
      "iod": -0.011,
      "anino": -0.18,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 8,
    "data": {
      "nao": -0.173,
      "amo": -0.112,
      "nino": 0.22,
      "pdo": 0.194,
      "iod": -0.091,
      "anino": -0.291,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 9,
    "data": {
      "nao": -0.084,
      "amo": -0.056,
      "nino": 0.181,
      "pdo": -0.025,
      "iod": -0.001,
      "anino": -0.261,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 10,
    "data": {
      "nao": -0.007,
      "amo": -0.002,
      "nino": -0.182,
      "pdo": -0.045,
      "iod": -0.11,
      "anino": -0.178,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 11,
    "data": {
      "nao": -0.04,
      "amo": -0.051,
      "nino": 0.182,
      "pdo": -0.319,
      "iod": -0.069,
      "anino": -0.298,
      "ismr": -6.903
    }
  },
  {
    "year": 1929,
    "month": 12,
    "data": {
      "nao": -0.06,
      "amo": -0.066,
      "nino": 0.114,
      "pdo": -0.329,
      "iod": -0.161,
      "anino": -0.272,
      "ismr": -6.903
    }
  },
  {
    "year": 1930,
    "month": 1,
    "data": {
      "nao": -0.01,
      "amo": -0.078,
      "nino": 0.837,
      "pdo": -0.213,
      "iod": -0.266,
      "anino": -0.453,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 2,
    "data": {
      "nao": -0.043,
      "amo": -0.116,
      "nino": 0.645,
      "pdo": -0.214,
      "iod": -0.29,
      "anino": -0.419,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 3,
    "data": {
      "nao": -0.03,
      "amo": -0.076,
      "nino": 0.459,
      "pdo": -0.233,
      "iod": -0.091,
      "anino": -0.241,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 4,
    "data": {
      "nao": -0.033,
      "amo": -0.104,
      "nino": 0.472,
      "pdo": -0.18,
      "iod": -0.048,
      "anino": -0.375,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 5,
    "data": {
      "nao": 0.037,
      "amo": -0.064,
      "nino": 0.396,
      "pdo": -0.117,
      "iod": -0.339,
      "anino": -0.355,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 6,
    "data": {
      "nao": 0.089,
      "amo": -0.011,
      "nino": 0.073,
      "pdo": -0.137,
      "iod": -0.149,
      "anino": -0.356,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 7,
    "data": {
      "nao": 0.176,
      "amo": 0.064,
      "nino": 0.454,
      "pdo": -0.1,
      "iod": -0.234,
      "anino": -0.363,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 8,
    "data": {
      "nao": 0.021,
      "amo": -0.011,
      "nino": 0.672,
      "pdo": 0.058,
      "iod": -0.148,
      "anino": -0.142,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 9,
    "data": {
      "nao": 0.096,
      "amo": 0.083,
      "nino": 0.941,
      "pdo": 0.143,
      "iod": -0.102,
      "anino": -0.008,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 10,
    "data": {
      "nao": -0.046,
      "amo": -0.043,
      "nino": 0.289,
      "pdo": -0.127,
      "iod": -0.052,
      "anino": -0.128,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 11,
    "data": {
      "nao": -0.001,
      "amo": -0.032,
      "nino": 0.439,
      "pdo": -0.07,
      "iod": 0.04,
      "anino": -0.393,
      "ismr": -11.068
    }
  },
  {
    "year": 1930,
    "month": 12,
    "data": {
      "nao": -0.005,
      "amo": -0.08,
      "nino": 0.552,
      "pdo": -0.208,
      "iod": 0.111,
      "anino": -0.565,
      "ismr": -11.068
    }
  },
  {
    "year": 1931,
    "month": 1,
    "data": {
      "nao": 0.062,
      "amo": 0.125,
      "nino": 0.938,
      "pdo": -0.146,
      "iod": -0.166,
      "anino": 0.335,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 2,
    "data": {
      "nao": 0.023,
      "amo": 0.068,
      "nino": 0.881,
      "pdo": -0.176,
      "iod": -0.248,
      "anino": 0.206,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 3,
    "data": {
      "nao": 0.018,
      "amo": 0.111,
      "nino": 0.784,
      "pdo": -0.163,
      "iod": -0.349,
      "anino": 0.512,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 4,
    "data": {
      "nao": 0.007,
      "amo": 0.105,
      "nino": 0.511,
      "pdo": -0.325,
      "iod": -0.083,
      "anino": 0.635,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 5,
    "data": {
      "nao": 0.09,
      "amo": 0.142,
      "nino": 0.312,
      "pdo": -0.31,
      "iod": 0.156,
      "anino": 0.67,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 6,
    "data": {
      "nao": 0.076,
      "amo": 0.17,
      "nino": 0.184,
      "pdo": -0.227,
      "iod": 0.165,
      "anino": 0.632,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 7,
    "data": {
      "nao": 0.057,
      "amo": 0.122,
      "nino": 0.071,
      "pdo": -0.35,
      "iod": 0.142,
      "anino": 0.487,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 8,
    "data": {
      "nao": 0.022,
      "amo": 0.08,
      "nino": 0.144,
      "pdo": -0.021,
      "iod": -0.002,
      "anino": 0.184,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 9,
    "data": {
      "nao": 0.08,
      "amo": 0.098,
      "nino": -0.14,
      "pdo": 0.011,
      "iod": -0.122,
      "anino": 0.054,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 10,
    "data": {
      "nao": 0.061,
      "amo": 0.086,
      "nino": 0.865,
      "pdo": 0.074,
      "iod": -0.05,
      "anino": 0.106,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 11,
    "data": {
      "nao": 0.052,
      "amo": 0.136,
      "nino": 1.507,
      "pdo": -0.006,
      "iod": 0.03,
      "anino": 0.292,
      "ismr": 7.091
    }
  },
  {
    "year": 1931,
    "month": 12,
    "data": {
      "nao": 0.053,
      "amo": 0.116,
      "nino": 1.301,
      "pdo": -0.087,
      "iod": -0.125,
      "anino": 0.262,
      "ismr": 7.091
    }
  },
  {
    "year": 1932,
    "month": 1,
    "data": {
      "nao": 0.079,
      "amo": 0.094,
      "nino": -0.222,
      "pdo": -0.033,
      "iod": 0.09,
      "anino": 0.165,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 2,
    "data": {
      "nao": 0.064,
      "amo": 0.103,
      "nino": 0.334,
      "pdo": -0.036,
      "iod": -0.275,
      "anino": 0.311,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 3,
    "data": {
      "nao": 0.061,
      "amo": 0.119,
      "nino": 0.394,
      "pdo": -0.106,
      "iod": 0.128,
      "anino": 0.669,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 4,
    "data": {
      "nao": 0.022,
      "amo": 0.089,
      "nino": 0.326,
      "pdo": -0.228,
      "iod": 0.212,
      "anino": 0.575,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 5,
    "data": {
      "nao": 0.015,
      "amo": 0.061,
      "nino": 0.476,
      "pdo": -0.178,
      "iod": 0.075,
      "anino": 0.508,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 6,
    "data": {
      "nao": 0.071,
      "amo": 0.105,
      "nino": 0.181,
      "pdo": -0.212,
      "iod": 0.189,
      "anino": 0.391,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 7,
    "data": {
      "nao": 0.103,
      "amo": 0.124,
      "nino": -0.07,
      "pdo": -0.3,
      "iod": 0.0,
      "anino": 0.27,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 8,
    "data": {
      "nao": 0.229,
      "amo": 0.248,
      "nino": -0.037,
      "pdo": -0.382,
      "iod": 0.007,
      "anino": 0.271,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 9,
    "data": {
      "nao": 0.229,
      "amo": 0.267,
      "nino": -0.081,
      "pdo": -0.24,
      "iod": -0.018,
      "anino": 0.451,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 10,
    "data": {
      "nao": 0.085,
      "amo": 0.121,
      "nino": -0.17,
      "pdo": -0.121,
      "iod": 0.022,
      "anino": 0.179,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 11,
    "data": {
      "nao": 0.05,
      "amo": 0.06,
      "nino": -0.05,
      "pdo": -0.163,
      "iod": 0.102,
      "anino": 0.105,
      "ismr": -11.3
    }
  },
  {
    "year": 1932,
    "month": 12,
    "data": {
      "nao": 0.066,
      "amo": 0.077,
      "nino": -0.149,
      "pdo": -0.155,
      "iod": -0.128,
      "anino": 0.141,
      "ismr": -11.3
    }
  },
  {
    "year": 1933,
    "month": 1,
    "data": {
      "nao": 0.088,
      "amo": 0.057,
      "nino": -0.001,
      "pdo": -0.015,
      "iod": 0.055,
      "anino": -0.048,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 2,
    "data": {
      "nao": 0.082,
      "amo": 0.102,
      "nino": -0.18,
      "pdo": -0.023,
      "iod": 0.169,
      "anino": 0.132,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 3,
    "data": {
      "nao": 0.049,
      "amo": 0.065,
      "nino": -0.197,
      "pdo": -0.02,
      "iod": 0.246,
      "anino": 0.044,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 4,
    "data": {
      "nao": 0.112,
      "amo": 0.144,
      "nino": -0.309,
      "pdo": -0.015,
      "iod": 0.236,
      "anino": 0.207,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 5,
    "data": {
      "nao": 0.127,
      "amo": 0.128,
      "nino": -0.3,
      "pdo": -0.196,
      "iod": 0.025,
      "anino": 0.35,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 6,
    "data": {
      "nao": 0.133,
      "amo": 0.112,
      "nino": -0.498,
      "pdo": -0.084,
      "iod": -0.074,
      "anino": 0.302,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 7,
    "data": {
      "nao": 0.161,
      "amo": 0.126,
      "nino": -0.687,
      "pdo": -0.088,
      "iod": 0.065,
      "anino": 0.212,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 8,
    "data": {
      "nao": 0.169,
      "amo": 0.119,
      "nino": -0.86,
      "pdo": 0.001,
      "iod": -0.187,
      "anino": 0.093,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 9,
    "data": {
      "nao": 0.21,
      "amo": 0.137,
      "nino": -1.087,
      "pdo": -0.08,
      "iod": -0.631,
      "anino": 0.051,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 10,
    "data": {
      "nao": 0.179,
      "amo": 0.198,
      "nino": -0.043,
      "pdo": -0.074,
      "iod": -0.344,
      "anino": 0.393,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 11,
    "data": {
      "nao": 0.092,
      "amo": 0.111,
      "nino": 0.206,
      "pdo": 0.005,
      "iod": 0.059,
      "anino": 0.278,
      "ismr": 31.81
    }
  },
  {
    "year": 1933,
    "month": 12,
    "data": {
      "nao": 0.062,
      "amo": 0.076,
      "nino": -0.014,
      "pdo": -0.103,
      "iod": 0.256,
      "anino": 0.097,
      "ismr": 31.81
    }
  },
  {
    "year": 1934,
    "month": 1,
    "data": {
      "nao": 0.001,
      "amo": -0.055,
      "nino": -1.26,
      "pdo": -0.071,
      "iod": -0.354,
      "anino": -0.405,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 2,
    "data": {
      "nao": -0.013,
      "amo": -0.075,
      "nino": -0.919,
      "pdo": -0.07,
      "iod": 0.033,
      "anino": -0.487,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 3,
    "data": {
      "nao": 0.017,
      "amo": -0.061,
      "nino": -0.828,
      "pdo": -0.09,
      "iod": 0.092,
      "anino": -0.584,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 4,
    "data": {
      "nao": 0.033,
      "amo": -0.023,
      "nino": -0.53,
      "pdo": -0.127,
      "iod": 0.197,
      "anino": -0.463,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 5,
    "data": {
      "nao": 0.023,
      "amo": -0.017,
      "nino": -0.668,
      "pdo": -0.142,
      "iod": 0.127,
      "anino": -0.537,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 6,
    "data": {
      "nao": 0.059,
      "amo": 0.075,
      "nino": -0.476,
      "pdo": 0.154,
      "iod": 0.28,
      "anino": -0.357,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 7,
    "data": {
      "nao": 0.122,
      "amo": 0.146,
      "nino": -0.385,
      "pdo": 0.031,
      "iod": 0.118,
      "anino": -0.324,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 8,
    "data": {
      "nao": 0.094,
      "amo": 0.1,
      "nino": -0.222,
      "pdo": -0.031,
      "iod": 0.265,
      "anino": -0.238,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 9,
    "data": {
      "nao": 0.112,
      "amo": 0.116,
      "nino": -0.223,
      "pdo": 0.05,
      "iod": 0.173,
      "anino": -0.112,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 10,
    "data": {
      "nao": 0.252,
      "amo": 0.234,
      "nino": -1.12,
      "pdo": -0.25,
      "iod": -0.598,
      "anino": 0.125,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 11,
    "data": {
      "nao": 0.123,
      "amo": 0.116,
      "nino": -1.003,
      "pdo": -0.171,
      "iod": -0.053,
      "anino": 0.041,
      "ismr": 16.219
    }
  },
  {
    "year": 1934,
    "month": 12,
    "data": {
      "nao": 0.027,
      "amo": -0.018,
      "nino": -0.869,
      "pdo": -0.153,
      "iod": -0.074,
      "anino": -0.196,
      "ismr": 16.219
    }
  },
  {
    "year": 1935,
    "month": 1,
    "data": {
      "nao": 0.044,
      "amo": 0.048,
      "nino": -0.185,
      "pdo": -0.099,
      "iod": 0.021,
      "anino": 0.046,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 2,
    "data": {
      "nao": -0.008,
      "amo": -0.016,
      "nino": -0.084,
      "pdo": -0.077,
      "iod": -0.007,
      "anino": -0.082,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 3,
    "data": {
      "nao": -0.025,
      "amo": -0.043,
      "nino": -0.166,
      "pdo": -0.049,
      "iod": -0.15,
      "anino": -0.285,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 4,
    "data": {
      "nao": 0.083,
      "amo": 0.046,
      "nino": -0.265,
      "pdo": -0.129,
      "iod": -0.102,
      "anino": -0.21,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 5,
    "data": {
      "nao": 0.091,
      "amo": 0.084,
      "nino": -0.277,
      "pdo": -0.105,
      "iod": 0.323,
      "anino": -0.032,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 6,
    "data": {
      "nao": 0.05,
      "amo": 0.069,
      "nino": -0.265,
      "pdo": -0.023,
      "iod": 0.239,
      "anino": -0.06,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 7,
    "data": {
      "nao": 0.036,
      "amo": 0.043,
      "nino": -0.273,
      "pdo": -0.027,
      "iod": 0.2,
      "anino": -0.09,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 8,
    "data": {
      "nao": 0.04,
      "amo": 0.033,
      "nino": -0.116,
      "pdo": -0.071,
      "iod": 0.269,
      "anino": -0.114,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 9,
    "data": {
      "nao": 0.049,
      "amo": -0.011,
      "nino": -0.129,
      "pdo": -0.076,
      "iod": 0.293,
      "anino": -0.232,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 10,
    "data": {
      "nao": 0.12,
      "amo": 0.131,
      "nino": -0.32,
      "pdo": -0.294,
      "iod": -0.016,
      "anino": -0.069,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 11,
    "data": {
      "nao": 0.093,
      "amo": 0.097,
      "nino": -0.294,
      "pdo": -0.22,
      "iod": 0.094,
      "anino": -0.139,
      "ismr": -1.247
    }
  },
  {
    "year": 1935,
    "month": 12,
    "data": {
      "nao": 0.091,
      "amo": 0.058,
      "nino": -0.368,
      "pdo": -0.269,
      "iod": 0.311,
      "anino": -0.164,
      "ismr": -1.247
    }
  },
  {
    "year": 1936,
    "month": 1,
    "data": {
      "nao": 0.102,
      "amo": 0.112,
      "nino": 0.452,
      "pdo": -0.244,
      "iod": 0.299,
      "anino": -0.05,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 2,
    "data": {
      "nao": 0.08,
      "amo": 0.107,
      "nino": 0.256,
      "pdo": -0.114,
      "iod": 0.051,
      "anino": 0.13,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 3,
    "data": {
      "nao": 0.084,
      "amo": 0.142,
      "nino": 0.133,
      "pdo": -0.009,
      "iod": 0.083,
      "anino": 0.361,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 4,
    "data": {
      "nao": 0.087,
      "amo": 0.15,
      "nino": 0.384,
      "pdo": -0.016,
      "iod": 0.193,
      "anino": 0.359,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 5,
    "data": {
      "nao": 0.062,
      "amo": 0.075,
      "nino": 0.294,
      "pdo": -0.129,
      "iod": 0.056,
      "anino": 0.49,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 6,
    "data": {
      "nao": 0.118,
      "amo": 0.127,
      "nino": -0.05,
      "pdo": 0.078,
      "iod": 0.156,
      "anino": 0.692,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 7,
    "data": {
      "nao": 0.175,
      "amo": 0.135,
      "nino": -0.039,
      "pdo": -0.014,
      "iod": 0.238,
      "anino": 0.435,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 8,
    "data": {
      "nao": 0.145,
      "amo": 0.1,
      "nino": 0.008,
      "pdo": 0.139,
      "iod": 0.249,
      "anino": 0.291,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 9,
    "data": {
      "nao": 0.133,
      "amo": 0.088,
      "nino": 0.052,
      "pdo": 0.18,
      "iod": -0.047,
      "anino": 0.161,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 10,
    "data": {
      "nao": 0.038,
      "amo": -0.0,
      "nino": 0.289,
      "pdo": 0.103,
      "iod": 0.112,
      "anino": -0.272,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 11,
    "data": {
      "nao": 0.073,
      "amo": 0.023,
      "nino": 0.514,
      "pdo": 0.076,
      "iod": 0.321,
      "anino": -0.272,
      "ismr": 14.938
    }
  },
  {
    "year": 1936,
    "month": 12,
    "data": {
      "nao": 0.083,
      "amo": 0.057,
      "nino": 0.476,
      "pdo": -0.159,
      "iod": 0.208,
      "anino": -0.202,
      "ismr": 14.938
    }
  },
  {
    "year": 1937,
    "month": 1,
    "data": {
      "nao": 0.042,
      "amo": 0.072,
      "nino": -0.108,
      "pdo": -0.015,
      "iod": -0.004,
      "anino": 0.016,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 2,
    "data": {
      "nao": 0.032,
      "amo": 0.093,
      "nino": 0.377,
      "pdo": 0.078,
      "iod": 0.001,
      "anino": 0.055,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 3,
    "data": {
      "nao": 0.027,
      "amo": 0.124,
      "nino": 0.493,
      "pdo": 0.038,
      "iod": -0.175,
      "anino": 0.208,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 4,
    "data": {
      "nao": -0.006,
      "amo": 0.085,
      "nino": 0.165,
      "pdo": 0.153,
      "iod": -0.173,
      "anino": 0.112,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 5,
    "data": {
      "nao": 0.062,
      "amo": 0.146,
      "nino": -0.077,
      "pdo": 0.071,
      "iod": 0.089,
      "anino": 0.198,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 6,
    "data": {
      "nao": 0.276,
      "amo": 0.355,
      "nino": -0.091,
      "pdo": -0.16,
      "iod": -0.103,
      "anino": 0.382,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 7,
    "data": {
      "nao": 0.343,
      "amo": 0.382,
      "nino": 0.025,
      "pdo": 0.032,
      "iod": 0.035,
      "anino": 0.449,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 8,
    "data": {
      "nao": 0.358,
      "amo": 0.388,
      "nino": 0.123,
      "pdo": 0.006,
      "iod": 0.167,
      "anino": 0.455,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 9,
    "data": {
      "nao": 0.272,
      "amo": 0.327,
      "nino": 0.14,
      "pdo": 0.026,
      "iod": 0.264,
      "anino": 0.54,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 10,
    "data": {
      "nao": 0.065,
      "amo": 0.043,
      "nino": 0.298,
      "pdo": -0.022,
      "iod": 0.004,
      "anino": 0.098,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 11,
    "data": {
      "nao": 0.058,
      "amo": 0.043,
      "nino": 0.049,
      "pdo": -0.165,
      "iod": 0.286,
      "anino": -0.062,
      "ismr": -1.628
    }
  },
  {
    "year": 1937,
    "month": 12,
    "data": {
      "nao": 0.024,
      "amo": 0.035,
      "nino": 0.301,
      "pdo": -0.106,
      "iod": 0.015,
      "anino": -0.071,
      "ismr": -1.628
    }
  },
  {
    "year": 1938,
    "month": 1,
    "data": {
      "nao": 0.045,
      "amo": 0.133,
      "nino": -0.056,
      "pdo": 0.038,
      "iod": 0.011,
      "anino": 0.485,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 2,
    "data": {
      "nao": 0.027,
      "amo": 0.082,
      "nino": 0.02,
      "pdo": 0.049,
      "iod": -0.295,
      "anino": 0.235,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 3,
    "data": {
      "nao": 0.104,
      "amo": 0.13,
      "nino": -0.213,
      "pdo": 0.054,
      "iod": -0.006,
      "anino": 0.155,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 4,
    "data": {
      "nao": 0.091,
      "amo": 0.119,
      "nino": -0.327,
      "pdo": 0.075,
      "iod": -0.149,
      "anino": 0.133,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 5,
    "data": {
      "nao": 0.087,
      "amo": 0.101,
      "nino": -0.368,
      "pdo": 0.146,
      "iod": 0.073,
      "anino": 0.127,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 6,
    "data": {
      "nao": 0.115,
      "amo": 0.127,
      "nino": -0.651,
      "pdo": 0.15,
      "iod": -0.112,
      "anino": 0.078,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 7,
    "data": {
      "nao": 0.076,
      "amo": 0.098,
      "nino": -0.936,
      "pdo": 0.22,
      "iod": -0.155,
      "anino": 0.058,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 8,
    "data": {
      "nao": 0.156,
      "amo": 0.164,
      "nino": -0.76,
      "pdo": 0.23,
      "iod": -0.044,
      "anino": 0.022,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 9,
    "data": {
      "nao": 0.136,
      "amo": 0.138,
      "nino": -0.5,
      "pdo": 0.039,
      "iod": -0.197,
      "anino": 0.031,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 10,
    "data": {
      "nao": 0.184,
      "amo": 0.231,
      "nino": 0.199,
      "pdo": -0.007,
      "iod": 0.071,
      "anino": 0.505,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 11,
    "data": {
      "nao": 0.138,
      "amo": 0.22,
      "nino": 0.5,
      "pdo": -0.051,
      "iod": 0.01,
      "anino": 0.707,
      "ismr": 14.957
    }
  },
  {
    "year": 1938,
    "month": 12,
    "data": {
      "nao": 0.077,
      "amo": 0.205,
      "nino": 0.062,
      "pdo": -0.046,
      "iod": -0.063,
      "anino": 0.822,
      "ismr": 14.957
    }
  },
  {
    "year": 1939,
    "month": 1,
    "data": {
      "nao": 0.099,
      "amo": 0.051,
      "nino": -1.042,
      "pdo": -0.163,
      "iod": 0.009,
      "anino": -0.29,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 2,
    "data": {
      "nao": 0.121,
      "amo": 0.048,
      "nino": -0.748,
      "pdo": -0.036,
      "iod": 0.188,
      "anino": -0.405,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 3,
    "data": {
      "nao": 0.067,
      "amo": -0.035,
      "nino": -0.514,
      "pdo": -0.025,
      "iod": -0.134,
      "anino": -0.518,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 4,
    "data": {
      "nao": 0.067,
      "amo": -0.028,
      "nino": -0.222,
      "pdo": -0.082,
      "iod": -0.404,
      "anino": -0.529,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 5,
    "data": {
      "nao": 0.054,
      "amo": -0.003,
      "nino": -0.012,
      "pdo": 0.009,
      "iod": -0.076,
      "anino": -0.368,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 6,
    "data": {
      "nao": 0.106,
      "amo": 0.061,
      "nino": 0.068,
      "pdo": -0.128,
      "iod": 0.23,
      "anino": -0.235,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 7,
    "data": {
      "nao": 0.115,
      "amo": 0.084,
      "nino": 0.151,
      "pdo": -0.102,
      "iod": 0.064,
      "anino": -0.142,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 8,
    "data": {
      "nao": 0.253,
      "amo": 0.178,
      "nino": 0.315,
      "pdo": -0.211,
      "iod": -0.098,
      "anino": 0.009,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 9,
    "data": {
      "nao": 0.287,
      "amo": 0.215,
      "nino": 0.082,
      "pdo": 0.081,
      "iod": 0.185,
      "anino": 0.168,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 10,
    "data": {
      "nao": 0.203,
      "amo": 0.17,
      "nino": -0.335,
      "pdo": -0.183,
      "iod": -0.256,
      "anino": 0.042,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 11,
    "data": {
      "nao": 0.194,
      "amo": 0.168,
      "nino": -0.884,
      "pdo": -0.183,
      "iod": -0.108,
      "anino": 0.013,
      "ismr": -14.734
    }
  },
  {
    "year": 1939,
    "month": 12,
    "data": {
      "nao": 0.12,
      "amo": 0.07,
      "nino": -0.812,
      "pdo": -0.171,
      "iod": -0.256,
      "anino": -0.175,
      "ismr": -14.734
    }
  },
  {
    "year": 1940,
    "month": 1,
    "data": {
      "nao": 0.078,
      "amo": 0.14,
      "nino": 0.54,
      "pdo": -0.401,
      "iod": 0.475,
      "anino": 0.603,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 2,
    "data": {
      "nao": 0.017,
      "amo": 0.062,
      "nino": 0.609,
      "pdo": -0.433,
      "iod": 0.456,
      "anino": 0.378,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 3,
    "data": {
      "nao": 0.058,
      "amo": 0.118,
      "nino": 0.671,
      "pdo": -0.301,
      "iod": 0.021,
      "anino": 0.434,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 4,
    "data": {
      "nao": 0.077,
      "amo": 0.136,
      "nino": 0.723,
      "pdo": -0.156,
      "iod": -0.177,
      "anino": 0.52,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 5,
    "data": {
      "nao": 0.054,
      "amo": 0.132,
      "nino": 1.042,
      "pdo": 0.035,
      "iod": 0.0,
      "anino": 0.559,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 6,
    "data": {
      "nao": 0.107,
      "amo": 0.101,
      "nino": 0.917,
      "pdo": -0.095,
      "iod": 0.269,
      "anino": 0.354,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 7,
    "data": {
      "nao": 0.132,
      "amo": 0.09,
      "nino": 0.944,
      "pdo": -0.112,
      "iod": 0.015,
      "anino": 0.228,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 8,
    "data": {
      "nao": 0.034,
      "amo": 0.086,
      "nino": 1.136,
      "pdo": -0.229,
      "iod": 0.141,
      "anino": 0.361,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 9,
    "data": {
      "nao": -0.001,
      "amo": 0.095,
      "nino": 0.237,
      "pdo": -0.255,
      "iod": 0.37,
      "anino": 0.28,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 10,
    "data": {
      "nao": 0.175,
      "amo": 0.127,
      "nino": -0.243,
      "pdo": 0.063,
      "iod": 0.277,
      "anino": 0.134,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 11,
    "data": {
      "nao": 0.065,
      "amo": 0.011,
      "nino": 0.583,
      "pdo": -0.07,
      "iod": 0.224,
      "anino": -0.025,
      "ismr": 1.2
    }
  },
  {
    "year": 1940,
    "month": 12,
    "data": {
      "nao": 0.074,
      "amo": 0.057,
      "nino": 0.34,
      "pdo": -0.363,
      "iod": 0.572,
      "anino": 0.113,
      "ismr": 1.2
    }
  },
  {
    "year": 1941,
    "month": 1,
    "data": {
      "nao": 0.066,
      "amo": 0.126,
      "nino": 1.322,
      "pdo": -0.22,
      "iod": -0.206,
      "anino": 0.495,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 2,
    "data": {
      "nao": 0.063,
      "amo": 0.152,
      "nino": 1.509,
      "pdo": -0.273,
      "iod": -0.19,
      "anino": 0.611,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 3,
    "data": {
      "nao": 0.069,
      "amo": 0.13,
      "nino": 1.451,
      "pdo": -0.241,
      "iod": 0.234,
      "anino": 0.403,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 4,
    "data": {
      "nao": 0.064,
      "amo": 0.129,
      "nino": 1.144,
      "pdo": -0.126,
      "iod": 0.311,
      "anino": 0.429,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 5,
    "data": {
      "nao": -0.046,
      "amo": 0.037,
      "nino": 0.977,
      "pdo": -0.115,
      "iod": 0.255,
      "anino": 0.477,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 6,
    "data": {
      "nao": -0.061,
      "amo": -0.021,
      "nino": 1.094,
      "pdo": -0.217,
      "iod": 0.438,
      "anino": 0.062,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 7,
    "data": {
      "nao": 0.031,
      "amo": 0.019,
      "nino": 1.006,
      "pdo": -0.264,
      "iod": 0.455,
      "anino": 0.076,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 8,
    "data": {
      "nao": -0.022,
      "amo": 0.014,
      "nino": 0.975,
      "pdo": -0.294,
      "iod": 0.597,
      "anino": 0.163,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 9,
    "data": {
      "nao": 0.078,
      "amo": 0.086,
      "nino": 0.896,
      "pdo": -0.004,
      "iod": 0.509,
      "anino": 0.158,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 10,
    "data": {
      "nao": 0.04,
      "amo": 0.118,
      "nino": 0.638,
      "pdo": -0.288,
      "iod": 0.262,
      "anino": 0.318,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 11,
    "data": {
      "nao": 0.06,
      "amo": 0.113,
      "nino": 1.076,
      "pdo": -0.208,
      "iod": -0.18,
      "anino": 0.369,
      "ismr": -29.99
    }
  },
  {
    "year": 1941,
    "month": 12,
    "data": {
      "nao": 0.013,
      "amo": 0.043,
      "nino": 1.393,
      "pdo": -0.261,
      "iod": 0.11,
      "anino": 0.105,
      "ismr": -29.99
    }
  },
  {
    "year": 1942,
    "month": 1,
    "data": {
      "nao": 0.087,
      "amo": 0.1,
      "nino": 1.314,
      "pdo": -0.081,
      "iod": -0.118,
      "anino": 0.242,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 2,
    "data": {
      "nao": 0.079,
      "amo": 0.132,
      "nino": 0.792,
      "pdo": 0.088,
      "iod": 0.031,
      "anino": 0.459,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 3,
    "data": {
      "nao": 0.08,
      "amo": 0.169,
      "nino": 0.395,
      "pdo": -0.001,
      "iod": 0.087,
      "anino": 0.479,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 4,
    "data": {
      "nao": 0.106,
      "amo": 0.173,
      "nino": 0.518,
      "pdo": -0.081,
      "iod": 0.066,
      "anino": 0.395,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 5,
    "data": {
      "nao": 0.106,
      "amo": 0.159,
      "nino": 0.191,
      "pdo": 0.005,
      "iod": 0.159,
      "anino": 0.515,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 6,
    "data": {
      "nao": 0.084,
      "amo": 0.137,
      "nino": 0.019,
      "pdo": -0.094,
      "iod": 0.05,
      "anino": 0.315,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 7,
    "data": {
      "nao": 0.071,
      "amo": 0.1,
      "nino": -0.129,
      "pdo": 0.118,
      "iod": -0.183,
      "anino": 0.25,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 8,
    "data": {
      "nao": 0.066,
      "amo": 0.089,
      "nino": -0.705,
      "pdo": 0.116,
      "iod": -0.169,
      "anino": 0.279,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 9,
    "data": {
      "nao": 0.07,
      "amo": 0.113,
      "nino": -0.888,
      "pdo": 0.159,
      "iod": 0.053,
      "anino": 0.043,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 10,
    "data": {
      "nao": 0.081,
      "amo": 0.12,
      "nino": 1.281,
      "pdo": 0.076,
      "iod": 0.478,
      "anino": 0.282,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 11,
    "data": {
      "nao": 0.101,
      "amo": 0.148,
      "nino": 1.355,
      "pdo": -0.095,
      "iod": 0.337,
      "anino": 0.389,
      "ismr": 27.369
    }
  },
  {
    "year": 1942,
    "month": 12,
    "data": {
      "nao": 0.076,
      "amo": 0.109,
      "nino": 1.464,
      "pdo": -0.115,
      "iod": 0.3,
      "anino": 0.241,
      "ismr": 27.369
    }
  },
  {
    "year": 1943,
    "month": 1,
    "data": {
      "nao": 0.118,
      "amo": 0.086,
      "nino": -0.658,
      "pdo": 0.164,
      "iod": 0.329,
      "anino": 0.055,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 2,
    "data": {
      "nao": 0.091,
      "amo": 0.074,
      "nino": -0.923,
      "pdo": 0.126,
      "iod": 0.109,
      "anino": 0.006,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 3,
    "data": {
      "nao": 0.037,
      "amo": 0.007,
      "nino": -0.754,
      "pdo": 0.133,
      "iod": 0.161,
      "anino": -0.125,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 4,
    "data": {
      "nao": 0.057,
      "amo": 0.061,
      "nino": -0.503,
      "pdo": 0.143,
      "iod": -0.029,
      "anino": -0.085,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 5,
    "data": {
      "nao": 0.047,
      "amo": 0.038,
      "nino": -0.279,
      "pdo": 0.206,
      "iod": -0.107,
      "anino": -0.036,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 6,
    "data": {
      "nao": 0.017,
      "amo": -0.036,
      "nino": -0.027,
      "pdo": 0.219,
      "iod": -0.073,
      "anino": -0.294,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 7,
    "data": {
      "nao": 0.058,
      "amo": -0.03,
      "nino": 0.155,
      "pdo": 0.31,
      "iod": -0.116,
      "anino": -0.213,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 8,
    "data": {
      "nao": 0.042,
      "amo": 0.017,
      "nino": 0.156,
      "pdo": 0.381,
      "iod": -0.131,
      "anino": 0.061,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 9,
    "data": {
      "nao": 0.066,
      "amo": 0.038,
      "nino": -0.374,
      "pdo": 0.233,
      "iod": -0.323,
      "anino": 0.148,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 10,
    "data": {
      "nao": 0.056,
      "amo": 0.097,
      "nino": -0.685,
      "pdo": 0.275,
      "iod": -0.004,
      "anino": 0.194,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 11,
    "data": {
      "nao": 0.102,
      "amo": 0.137,
      "nino": -1.145,
      "pdo": 0.358,
      "iod": 0.196,
      "anino": 0.24,
      "ismr": 5.003
    }
  },
  {
    "year": 1943,
    "month": 12,
    "data": {
      "nao": 0.098,
      "amo": 0.118,
      "nino": -0.934,
      "pdo": 0.245,
      "iod": -0.03,
      "anino": 0.428,
      "ismr": 5.003
    }
  },
  {
    "year": 1944,
    "month": 1,
    "data": {
      "nao": 0.18,
      "amo": 0.182,
      "nino": -0.348,
      "pdo": 0.234,
      "iod": -0.165,
      "anino": 0.24,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 2,
    "data": {
      "nao": 0.2,
      "amo": 0.22,
      "nino": -0.18,
      "pdo": 0.288,
      "iod": 0.159,
      "anino": 0.257,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 3,
    "data": {
      "nao": 0.174,
      "amo": 0.232,
      "nino": -0.047,
      "pdo": 0.327,
      "iod": 0.5,
      "anino": 0.438,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 4,
    "data": {
      "nao": 0.175,
      "amo": 0.232,
      "nino": 0.119,
      "pdo": 0.299,
      "iod": 0.555,
      "anino": 0.267,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 5,
    "data": {
      "nao": 0.131,
      "amo": 0.175,
      "nino": 0.046,
      "pdo": 0.332,
      "iod": 0.367,
      "anino": 0.275,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 6,
    "data": {
      "nao": 0.104,
      "amo": 0.16,
      "nino": 0.09,
      "pdo": 0.37,
      "iod": 0.296,
      "anino": 0.266,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 7,
    "data": {
      "nao": 0.116,
      "amo": 0.154,
      "nino": 0.291,
      "pdo": 0.275,
      "iod": 0.137,
      "anino": 0.456,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 8,
    "data": {
      "nao": 0.143,
      "amo": 0.129,
      "nino": 0.14,
      "pdo": 0.193,
      "iod": 0.271,
      "anino": 0.147,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 9,
    "data": {
      "nao": 0.197,
      "amo": 0.221,
      "nino": -0.331,
      "pdo": 0.263,
      "iod": 0.321,
      "anino": 0.304,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 10,
    "data": {
      "nao": 0.095,
      "amo": 0.131,
      "nino": -0.744,
      "pdo": 0.268,
      "iod": -0.361,
      "anino": 0.228,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 11,
    "data": {
      "nao": 0.13,
      "amo": 0.115,
      "nino": -0.641,
      "pdo": 0.165,
      "iod": -0.318,
      "anino": 0.237,
      "ismr": 18.038
    }
  },
  {
    "year": 1944,
    "month": 12,
    "data": {
      "nao": 0.141,
      "amo": 0.116,
      "nino": -0.588,
      "pdo": 0.237,
      "iod": -0.132,
      "anino": 0.162,
      "ismr": 18.038
    }
  },
  {
    "year": 1945,
    "month": 1,
    "data": {
      "nao": 0.033,
      "amo": 0.116,
      "nino": -0.251,
      "pdo": 0.43,
      "iod": 0.046,
      "anino": 0.369,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 2,
    "data": {
      "nao": 0.106,
      "amo": 0.182,
      "nino": -0.34,
      "pdo": 0.336,
      "iod": -0.04,
      "anino": 0.373,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 3,
    "data": {
      "nao": 0.144,
      "amo": 0.161,
      "nino": -0.615,
      "pdo": 0.346,
      "iod": 0.285,
      "anino": 0.05,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 4,
    "data": {
      "nao": 0.183,
      "amo": 0.215,
      "nino": -0.302,
      "pdo": 0.182,
      "iod": 0.034,
      "anino": 0.146,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 5,
    "data": {
      "nao": 0.165,
      "amo": 0.217,
      "nino": -0.352,
      "pdo": 0.351,
      "iod": -0.224,
      "anino": 0.386,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 6,
    "data": {
      "nao": 0.105,
      "amo": 0.129,
      "nino": 0.2,
      "pdo": 0.299,
      "iod": 0.336,
      "anino": 0.167,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 7,
    "data": {
      "nao": 0.053,
      "amo": 0.047,
      "nino": -0.072,
      "pdo": 0.242,
      "iod": 0.451,
      "anino": 0.05,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 8,
    "data": {
      "nao": 0.069,
      "amo": 0.058,
      "nino": -0.275,
      "pdo": 0.214,
      "iod": 0.25,
      "anino": 0.127,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 9,
    "data": {
      "nao": 0.101,
      "amo": 0.035,
      "nino": -0.228,
      "pdo": 0.223,
      "iod": -0.018,
      "anino": -0.042,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 10,
    "data": {
      "nao": 0.143,
      "amo": 0.184,
      "nino": -0.335,
      "pdo": 0.452,
      "iod": 0.375,
      "anino": 0.349,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 11,
    "data": {
      "nao": 0.124,
      "amo": 0.146,
      "nino": -0.07,
      "pdo": 0.295,
      "iod": 0.092,
      "anino": 0.274,
      "ismr": 15.672
    }
  },
  {
    "year": 1945,
    "month": 12,
    "data": {
      "nao": 0.064,
      "amo": 0.134,
      "nino": 0.065,
      "pdo": 0.451,
      "iod": 0.326,
      "anino": 0.232,
      "ismr": 15.672
    }
  },
  {
    "year": 1946,
    "month": 1,
    "data": {
      "nao": 0.079,
      "amo": 0.101,
      "nino": -0.965,
      "pdo": 0.149,
      "iod": 0.311,
      "anino": 0.156,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 2,
    "data": {
      "nao": 0.075,
      "amo": 0.151,
      "nino": -0.345,
      "pdo": 0.075,
      "iod": -0.026,
      "anino": 0.352,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 3,
    "data": {
      "nao": 0.083,
      "amo": 0.105,
      "nino": -0.542,
      "pdo": 0.051,
      "iod": -0.084,
      "anino": 0.2,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 4,
    "data": {
      "nao": 0.043,
      "amo": -0.003,
      "nino": -0.67,
      "pdo": -0.067,
      "iod": 0.039,
      "anino": -0.094,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 5,
    "data": {
      "nao": 0.01,
      "amo": -0.048,
      "nino": -0.039,
      "pdo": -0.041,
      "iod": 0.242,
      "anino": -0.192,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 6,
    "data": {
      "nao": -0.003,
      "amo": -0.091,
      "nino": 0.038,
      "pdo": -0.077,
      "iod": 0.017,
      "anino": -0.393,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 7,
    "data": {
      "nao": -0.041,
      "amo": -0.095,
      "nino": 0.17,
      "pdo": 0.027,
      "iod": 0.087,
      "anino": -0.204,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 8,
    "data": {
      "nao": -0.061,
      "amo": -0.078,
      "nino": 0.278,
      "pdo": -0.144,
      "iod": 0.362,
      "anino": -0.103,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 9,
    "data": {
      "nao": 0.072,
      "amo": 0.022,
      "nino": 0.136,
      "pdo": 0.106,
      "iod": 0.288,
      "anino": 0.005,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 10,
    "data": {
      "nao": 0.107,
      "amo": 0.095,
      "nino": -0.155,
      "pdo": 0.381,
      "iod": -0.047,
      "anino": 0.1,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 11,
    "data": {
      "nao": 0.123,
      "amo": 0.143,
      "nino": -0.517,
      "pdo": 0.472,
      "iod": 0.112,
      "anino": 0.137,
      "ismr": 13.881
    }
  },
  {
    "year": 1946,
    "month": 12,
    "data": {
      "nao": 0.052,
      "amo": 0.1,
      "nino": -0.883,
      "pdo": 0.459,
      "iod": -0.22,
      "anino": 0.276,
      "ismr": 13.881
    }
  },
  {
    "year": 1947,
    "month": 1,
    "data": {
      "nao": -0.011,
      "amo": -0.059,
      "nino": 0.512,
      "pdo": 0.046,
      "iod": 0.017,
      "anino": -0.192,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 2,
    "data": {
      "nao": -0.052,
      "amo": -0.074,
      "nino": 0.216,
      "pdo": 0.036,
      "iod": -0.064,
      "anino": -0.093,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 3,
    "data": {
      "nao": -0.059,
      "amo": -0.039,
      "nino": 0.272,
      "pdo": 0.045,
      "iod": 0.336,
      "anino": 0.031,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 4,
    "data": {
      "nao": -0.001,
      "amo": -0.023,
      "nino": -0.169,
      "pdo": -0.001,
      "iod": 0.196,
      "anino": -0.165,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 5,
    "data": {
      "nao": -0.016,
      "amo": -0.066,
      "nino": -0.036,
      "pdo": 0.078,
      "iod": 0.46,
      "anino": -0.328,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 6,
    "data": {
      "nao": -0.039,
      "amo": -0.062,
      "nino": 0.197,
      "pdo": -0.147,
      "iod": 0.009,
      "anino": -0.206,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 7,
    "data": {
      "nao": -0.054,
      "amo": -0.069,
      "nino": 0.313,
      "pdo": -0.288,
      "iod": -0.204,
      "anino": -0.179,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 8,
    "data": {
      "nao": 0.015,
      "amo": 0.006,
      "nino": 0.053,
      "pdo": -0.247,
      "iod": -0.306,
      "anino": -0.178,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 9,
    "data": {
      "nao": -0.016,
      "amo": -0.024,
      "nino": -0.151,
      "pdo": -0.144,
      "iod": -0.338,
      "anino": -0.182,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 10,
    "data": {
      "nao": 0.067,
      "amo": 0.034,
      "nino": 0.144,
      "pdo": -0.014,
      "iod": 0.306,
      "anino": -0.001,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 11,
    "data": {
      "nao": 0.027,
      "amo": 0.012,
      "nino": -0.074,
      "pdo": 0.139,
      "iod": 0.199,
      "anino": -0.118,
      "ismr": 24.316
    }
  },
  {
    "year": 1947,
    "month": 12,
    "data": {
      "nao": -0.017,
      "amo": -0.02,
      "nino": 0.454,
      "pdo": 0.136,
      "iod": -0.387,
      "anino": -0.043,
      "ismr": 24.316
    }
  },
  {
    "year": 1948,
    "month": 1,
    "data": {
      "nao": 0.065,
      "amo": 0.1,
      "nino": 0.111,
      "pdo": -0.002,
      "iod": -0.038,
      "anino": 0.258,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 2,
    "data": {
      "nao": 0.061,
      "amo": 0.088,
      "nino": 0.316,
      "pdo": -0.089,
      "iod": -0.008,
      "anino": 0.198,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 3,
    "data": {
      "nao": 0.057,
      "amo": 0.101,
      "nino": 0.343,
      "pdo": -0.031,
      "iod": 0.208,
      "anino": 0.189,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 4,
    "data": {
      "nao": 0.022,
      "amo": 0.016,
      "nino": 0.237,
      "pdo": 0.079,
      "iod": 0.261,
      "anino": -0.001,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 5,
    "data": {
      "nao": 0.028,
      "amo": 0.026,
      "nino": 0.48,
      "pdo": 0.071,
      "iod": 0.081,
      "anino": 0.092,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 6,
    "data": {
      "nao": -0.01,
      "amo": 0.039,
      "nino": 0.296,
      "pdo": 0.13,
      "iod": 0.321,
      "anino": 0.312,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 7,
    "data": {
      "nao": -0.074,
      "amo": -0.009,
      "nino": 0.147,
      "pdo": 0.276,
      "iod": 0.314,
      "anino": 0.221,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 8,
    "data": {
      "nao": 0.007,
      "amo": 0.035,
      "nino": 0.13,
      "pdo": 0.253,
      "iod": 0.121,
      "anino": 0.065,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 9,
    "data": {
      "nao": -0.02,
      "amo": 0.015,
      "nino": -0.097,
      "pdo": 0.186,
      "iod": -0.102,
      "anino": 0.057,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 10,
    "data": {
      "nao": -0.013,
      "amo": 0.027,
      "nino": -0.414,
      "pdo": -0.182,
      "iod": -0.361,
      "anino": -0.08,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 11,
    "data": {
      "nao": 0.058,
      "amo": 0.114,
      "nino": -0.365,
      "pdo": 0.037,
      "iod": 0.142,
      "anino": 0.204,
      "ismr": 6.475
    }
  },
  {
    "year": 1948,
    "month": 12,
    "data": {
      "nao": 0.044,
      "amo": 0.078,
      "nino": 0.022,
      "pdo": 0.059,
      "iod": 0.284,
      "anino": 0.247,
      "ismr": 6.475
    }
  },
  {
    "year": 1949,
    "month": 1,
    "data": {
      "nao": 0.183,
      "amo": 0.149,
      "nino": -0.04,
      "pdo": 0.343,
      "iod": 0.081,
      "anino": 0.031,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 2,
    "data": {
      "nao": 0.142,
      "amo": 0.135,
      "nino": 0.424,
      "pdo": 0.424,
      "iod": 0.337,
      "anino": -0.003,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 3,
    "data": {
      "nao": 0.1,
      "amo": 0.079,
      "nino": -0.296,
      "pdo": 0.289,
      "iod": 0.191,
      "anino": -0.045,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 4,
    "data": {
      "nao": 0.118,
      "amo": 0.108,
      "nino": -0.067,
      "pdo": 0.277,
      "iod": 0.4,
      "anino": -0.063,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 5,
    "data": {
      "nao": 0.069,
      "amo": 0.04,
      "nino": 0.19,
      "pdo": 0.228,
      "iod": 0.081,
      "anino": -0.186,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 6,
    "data": {
      "nao": 0.023,
      "amo": 0.041,
      "nino": 0.016,
      "pdo": 0.005,
      "iod": 0.143,
      "anino": -0.168,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 7,
    "data": {
      "nao": 0.029,
      "amo": 0.099,
      "nino": -0.076,
      "pdo": 0.031,
      "iod": 0.291,
      "anino": -0.046,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 8,
    "data": {
      "nao": -0.007,
      "amo": 0.088,
      "nino": 0.009,
      "pdo": 0.185,
      "iod": 0.225,
      "anino": 0.094,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 9,
    "data": {
      "nao": 0.086,
      "amo": 0.097,
      "nino": -0.171,
      "pdo": 0.137,
      "iod": 0.241,
      "anino": 0.133,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 10,
    "data": {
      "nao": 0.063,
      "amo": 0.094,
      "nino": -0.159,
      "pdo": 0.088,
      "iod": 0.195,
      "anino": 0.093,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 11,
    "data": {
      "nao": 0.113,
      "amo": 0.139,
      "nino": -0.132,
      "pdo": -0.097,
      "iod": 0.15,
      "anino": 0.045,
      "ismr": 13.934
    }
  },
  {
    "year": 1949,
    "month": 12,
    "data": {
      "nao": 0.114,
      "amo": 0.097,
      "nino": 0.196,
      "pdo": 0.015,
      "iod": 0.041,
      "anino": -0.1,
      "ismr": 13.934
    }
  },
  {
    "year": 1950,
    "month": 1,
    "data": {
      "nao": 0.085,
      "amo": 0.073,
      "nino": -0.459,
      "pdo": 0.326,
      "iod": -0.13,
      "anino": -0.082,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 2,
    "data": {
      "nao": 0.045,
      "amo": 0.012,
      "nino": -0.721,
      "pdo": 0.393,
      "iod": -0.369,
      "anino": -0.215,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 3,
    "data": {
      "nao": 0.04,
      "amo": 0.008,
      "nino": -0.378,
      "pdo": 0.325,
      "iod": -0.262,
      "anino": -0.308,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 4,
    "data": {
      "nao": 0.013,
      "amo": -0.0,
      "nino": -0.459,
      "pdo": 0.284,
      "iod": -0.076,
      "anino": -0.196,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 5,
    "data": {
      "nao": 0.055,
      "amo": 0.012,
      "nino": -0.303,
      "pdo": 0.332,
      "iod": -0.017,
      "anino": -0.26,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 6,
    "data": {
      "nao": 0.024,
      "amo": 0.017,
      "nino": -0.321,
      "pdo": 0.224,
      "iod": -0.134,
      "anino": -0.234,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 7,
    "data": {
      "nao": -0.007,
      "amo": 0.014,
      "nino": -0.595,
      "pdo": 0.297,
      "iod": -0.037,
      "anino": -0.22,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 8,
    "data": {
      "nao": 0.039,
      "amo": 0.0,
      "nino": -0.309,
      "pdo": 0.293,
      "iod": 0.005,
      "anino": -0.056,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 9,
    "data": {
      "nao": 0.032,
      "amo": -0.028,
      "nino": -0.656,
      "pdo": 0.243,
      "iod": -0.019,
      "anino": 0.043,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 10,
    "data": {
      "nao": 0.113,
      "amo": 0.115,
      "nino": -0.477,
      "pdo": 0.331,
      "iod": 0.3,
      "anino": 0.079,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 11,
    "data": {
      "nao": 0.138,
      "amo": 0.108,
      "nino": -0.671,
      "pdo": 0.273,
      "iod": 0.063,
      "anino": -0.062,
      "ismr": 7.244
    }
  },
  {
    "year": 1950,
    "month": 12,
    "data": {
      "nao": 0.137,
      "amo": 0.125,
      "nino": -0.661,
      "pdo": 0.334,
      "iod": 0.028,
      "anino": 0.059,
      "ismr": 7.244
    }
  },
  {
    "year": 1951,
    "month": 1,
    "data": {
      "nao": 0.063,
      "amo": 0.071,
      "nino": -0.783,
      "pdo": 0.221,
      "iod": -0.007,
      "anino": 0.043,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 2,
    "data": {
      "nao": 0.048,
      "amo": 0.026,
      "nino": -0.617,
      "pdo": 0.296,
      "iod": 0.205,
      "anino": -0.099,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 3,
    "data": {
      "nao": 0.047,
      "amo": 0.026,
      "nino": -0.462,
      "pdo": 0.25,
      "iod": 0.211,
      "anino": -0.03,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 4,
    "data": {
      "nao": 0.072,
      "amo": 0.106,
      "nino": -0.192,
      "pdo": 0.133,
      "iod": -0.314,
      "anino": 0.266,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 5,
    "data": {
      "nao": 0.06,
      "amo": 0.111,
      "nino": 0.317,
      "pdo": 0.283,
      "iod": 0.176,
      "anino": 0.341,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 6,
    "data": {
      "nao": 0.11,
      "amo": 0.155,
      "nino": 0.49,
      "pdo": 0.352,
      "iod": 0.064,
      "anino": 0.253,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 7,
    "data": {
      "nao": 0.132,
      "amo": 0.246,
      "nino": 0.638,
      "pdo": 0.239,
      "iod": 0.097,
      "anino": 0.335,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 8,
    "data": {
      "nao": 0.094,
      "amo": 0.19,
      "nino": 0.75,
      "pdo": 0.46,
      "iod": 0.183,
      "anino": 0.36,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 9,
    "data": {
      "nao": 0.091,
      "amo": 0.146,
      "nino": 0.836,
      "pdo": 0.402,
      "iod": 0.401,
      "anino": 0.258,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 10,
    "data": {
      "nao": 0.01,
      "amo": -0.052,
      "nino": -0.767,
      "pdo": 0.166,
      "iod": -0.041,
      "anino": -0.045,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 11,
    "data": {
      "nao": 0.088,
      "amo": 0.027,
      "nino": -1.028,
      "pdo": 0.321,
      "iod": -0.047,
      "anino": 0.007,
      "ismr": -27.272
    }
  },
  {
    "year": 1951,
    "month": 12,
    "data": {
      "nao": 0.087,
      "amo": 0.06,
      "nino": -0.754,
      "pdo": 0.306,
      "iod": 0.046,
      "anino": 0.086,
      "ismr": -27.272
    }
  },
  {
    "year": 1952,
    "month": 1,
    "data": {
      "nao": 0.073,
      "amo": 0.076,
      "nino": 0.373,
      "pdo": 0.352,
      "iod": 0.26,
      "anino": -0.175,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 2,
    "data": {
      "nao": 0.096,
      "amo": 0.115,
      "nino": 0.277,
      "pdo": 0.261,
      "iod": 0.315,
      "anino": -0.003,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 3,
    "data": {
      "nao": 0.111,
      "amo": 0.155,
      "nino": 0.099,
      "pdo": 0.199,
      "iod": 0.183,
      "anino": 0.237,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 4,
    "data": {
      "nao": 0.129,
      "amo": 0.142,
      "nino": 0.215,
      "pdo": 0.22,
      "iod": 0.251,
      "anino": 0.169,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 5,
    "data": {
      "nao": 0.165,
      "amo": 0.187,
      "nino": 0.084,
      "pdo": 0.236,
      "iod": 0.154,
      "anino": 0.366,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 6,
    "data": {
      "nao": 0.207,
      "amo": 0.277,
      "nino": -0.362,
      "pdo": 0.221,
      "iod": 0.119,
      "anino": 0.434,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 7,
    "data": {
      "nao": 0.214,
      "amo": 0.274,
      "nino": -0.473,
      "pdo": 0.053,
      "iod": 0.036,
      "anino": 0.307,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 8,
    "data": {
      "nao": 0.249,
      "amo": 0.332,
      "nino": -0.536,
      "pdo": 0.237,
      "iod": -0.011,
      "anino": 0.339,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 9,
    "data": {
      "nao": 0.121,
      "amo": 0.212,
      "nino": -0.257,
      "pdo": 0.287,
      "iod": 0.024,
      "anino": 0.388,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 10,
    "data": {
      "nao": 0.108,
      "amo": 0.112,
      "nino": 1.168,
      "pdo": 0.298,
      "iod": 0.194,
      "anino": 0.137,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 11,
    "data": {
      "nao": 0.098,
      "amo": 0.127,
      "nino": 1.102,
      "pdo": 0.207,
      "iod": 0.246,
      "anino": 0.151,
      "ismr": -13.737
    }
  },
  {
    "year": 1952,
    "month": 12,
    "data": {
      "nao": 0.063,
      "amo": 0.116,
      "nino": 0.673,
      "pdo": 0.35,
      "iod": 0.265,
      "anino": 0.051,
      "ismr": -13.737
    }
  },
  {
    "year": 1953,
    "month": 1,
    "data": {
      "nao": 0.096,
      "amo": 0.168,
      "nino": 0.509,
      "pdo": 0.109,
      "iod": 0.267,
      "anino": 0.491,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 2,
    "data": {
      "nao": 0.092,
      "amo": 0.137,
      "nino": 0.392,
      "pdo": 0.074,
      "iod": 0.157,
      "anino": 0.302,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 3,
    "data": {
      "nao": 0.096,
      "amo": 0.103,
      "nino": 0.536,
      "pdo": 0.151,
      "iod": 0.286,
      "anino": 0.031,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 4,
    "data": {
      "nao": 0.14,
      "amo": 0.178,
      "nino": 0.35,
      "pdo": 0.152,
      "iod": 0.0,
      "anino": 0.299,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 5,
    "data": {
      "nao": 0.214,
      "amo": 0.225,
      "nino": 0.348,
      "pdo": 0.112,
      "iod": 0.471,
      "anino": 0.225,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 6,
    "data": {
      "nao": 0.204,
      "amo": 0.179,
      "nino": 0.47,
      "pdo": 0.045,
      "iod": 0.217,
      "anino": 0.229,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 7,
    "data": {
      "nao": 0.252,
      "amo": 0.195,
      "nino": 0.407,
      "pdo": 0.111,
      "iod": 0.045,
      "anino": 0.307,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 8,
    "data": {
      "nao": 0.183,
      "amo": 0.089,
      "nino": 0.507,
      "pdo": 0.233,
      "iod": 0.068,
      "anino": 0.194,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 9,
    "data": {
      "nao": 0.211,
      "amo": 0.139,
      "nino": 0.658,
      "pdo": 0.212,
      "iod": 0.211,
      "anino": 0.165,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 10,
    "data": {
      "nao": 0.152,
      "amo": 0.184,
      "nino": -0.358,
      "pdo": 0.299,
      "iod": -0.249,
      "anino": 0.288,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 11,
    "data": {
      "nao": 0.12,
      "amo": 0.122,
      "nino": -0.107,
      "pdo": 0.144,
      "iod": 0.124,
      "anino": 0.23,
      "ismr": 18.772
    }
  },
  {
    "year": 1953,
    "month": 12,
    "data": {
      "nao": 0.118,
      "amo": 0.171,
      "nino": 0.07,
      "pdo": 0.182,
      "iod": 0.231,
      "anino": 0.44,
      "ismr": 18.772
    }
  },
  {
    "year": 1954,
    "month": 1,
    "data": {
      "nao": 0.137,
      "amo": 0.133,
      "nino": 0.002,
      "pdo": 0.158,
      "iod": -0.3,
      "anino": 0.219,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 2,
    "data": {
      "nao": 0.08,
      "amo": 0.047,
      "nino": 0.077,
      "pdo": 0.124,
      "iod": -0.046,
      "anino": 0.011,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 3,
    "data": {
      "nao": 0.075,
      "amo": 0.046,
      "nino": 0.054,
      "pdo": 0.07,
      "iod": -0.02,
      "anino": -0.072,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 4,
    "data": {
      "nao": 0.022,
      "amo": -0.018,
      "nino": -0.169,
      "pdo": 0.159,
      "iod": 0.233,
      "anino": -0.24,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 5,
    "data": {
      "nao": 0.06,
      "amo": 0.005,
      "nino": -0.179,
      "pdo": 0.009,
      "iod": 0.242,
      "anino": 0.096,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 6,
    "data": {
      "nao": 0.119,
      "amo": 0.064,
      "nino": -0.406,
      "pdo": -0.192,
      "iod": -0.096,
      "anino": 0.136,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 7,
    "data": {
      "nao": 0.059,
      "amo": -0.005,
      "nino": -0.615,
      "pdo": -0.217,
      "iod": -0.252,
      "anino": 0.016,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 8,
    "data": {
      "nao": 0.04,
      "amo": -0.045,
      "nino": -0.496,
      "pdo": 0.063,
      "iod": -0.239,
      "anino": -0.002,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 9,
    "data": {
      "nao": -0.011,
      "amo": -0.045,
      "nino": -0.625,
      "pdo": 0.214,
      "iod": -0.244,
      "anino": -0.122,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 10,
    "data": {
      "nao": 0.126,
      "amo": 0.092,
      "nino": 0.611,
      "pdo": 0.126,
      "iod": -0.095,
      "anino": 0.117,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 11,
    "data": {
      "nao": 0.185,
      "amo": 0.168,
      "nino": 0.365,
      "pdo": 0.02,
      "iod": 0.066,
      "anino": 0.165,
      "ismr": 9.381
    }
  },
  {
    "year": 1954,
    "month": 12,
    "data": {
      "nao": 0.188,
      "amo": 0.191,
      "nino": 0.067,
      "pdo": -0.028,
      "iod": 0.132,
      "anino": 0.269,
      "ismr": 9.381
    }
  },
  {
    "year": 1955,
    "month": 1,
    "data": {
      "nao": 0.1,
      "amo": 0.105,
      "nino": -0.903,
      "pdo": 0.014,
      "iod": 0.023,
      "anino": -0.021,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 2,
    "data": {
      "nao": 0.052,
      "amo": 0.073,
      "nino": -0.956,
      "pdo": 0.122,
      "iod": -0.119,
      "anino": -0.045,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 3,
    "data": {
      "nao": 0.041,
      "amo": 0.045,
      "nino": -0.682,
      "pdo": 0.198,
      "iod": -0.073,
      "anino": -0.154,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 4,
    "data": {
      "nao": 0.058,
      "amo": 0.062,
      "nino": -0.747,
      "pdo": 0.167,
      "iod": 0.02,
      "anino": -0.157,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 5,
    "data": {
      "nao": 0.111,
      "amo": 0.105,
      "nino": -0.741,
      "pdo": 0.083,
      "iod": -0.355,
      "anino": -0.144,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 6,
    "data": {
      "nao": 0.124,
      "amo": 0.095,
      "nino": -1.066,
      "pdo": 0.045,
      "iod": -0.318,
      "anino": -0.055,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 7,
    "data": {
      "nao": 0.169,
      "amo": 0.203,
      "nino": -0.954,
      "pdo": 0.048,
      "iod": -0.152,
      "anino": 0.145,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 8,
    "data": {
      "nao": 0.082,
      "amo": 0.155,
      "nino": -0.936,
      "pdo": 0.2,
      "iod": 0.048,
      "anino": 0.268,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 9,
    "data": {
      "nao": 0.085,
      "amo": 0.12,
      "nino": -0.919,
      "pdo": 0.075,
      "iod": -0.352,
      "anino": 0.259,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 10,
    "data": {
      "nao": 0.043,
      "amo": -0.016,
      "nino": -0.954,
      "pdo": 0.133,
      "iod": -0.459,
      "anino": -0.334,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 11,
    "data": {
      "nao": 0.061,
      "amo": 0.013,
      "nino": -0.814,
      "pdo": 0.093,
      "iod": -0.053,
      "anino": -0.259,
      "ismr": 20.566
    }
  },
  {
    "year": 1955,
    "month": 12,
    "data": {
      "nao": 0.094,
      "amo": 0.038,
      "nino": -0.914,
      "pdo": 0.019,
      "iod": 0.001,
      "anino": -0.342,
      "ismr": 20.566
    }
  },
  {
    "year": 1956,
    "month": 1,
    "data": {
      "nao": 0.111,
      "amo": 0.144,
      "nino": -0.929,
      "pdo": 0.294,
      "iod": 0.178,
      "anino": 0.417,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 2,
    "data": {
      "nao": 0.051,
      "amo": 0.069,
      "nino": -0.956,
      "pdo": 0.244,
      "iod": 0.128,
      "anino": 0.242,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 3,
    "data": {
      "nao": 0.053,
      "amo": 0.034,
      "nino": -0.435,
      "pdo": 0.3,
      "iod": -0.031,
      "anino": 0.06,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 4,
    "data": {
      "nao": 0.05,
      "amo": 0.024,
      "nino": -0.351,
      "pdo": 0.213,
      "iod": -0.071,
      "anino": 0.077,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 5,
    "data": {
      "nao": 0.015,
      "amo": -0.042,
      "nino": -0.728,
      "pdo": 0.193,
      "iod": -0.327,
      "anino": -0.201,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 6,
    "data": {
      "nao": -0.087,
      "amo": -0.142,
      "nino": -0.761,
      "pdo": 0.072,
      "iod": -0.338,
      "anino": -0.265,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 7,
    "data": {
      "nao": -0.049,
      "amo": -0.086,
      "nino": -0.792,
      "pdo": 0.16,
      "iod": -0.399,
      "anino": -0.256,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 8,
    "data": {
      "nao": -0.1,
      "amo": -0.096,
      "nino": -0.51,
      "pdo": 0.257,
      "iod": -0.032,
      "anino": -0.259,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 9,
    "data": {
      "nao": -0.114,
      "amo": -0.076,
      "nino": -0.728,
      "pdo": 0.095,
      "iod": -0.064,
      "anino": -0.225,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 10,
    "data": {
      "nao": 0.131,
      "amo": 0.131,
      "nino": -1.375,
      "pdo": 0.12,
      "iod": -0.498,
      "anino": 0.259,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 11,
    "data": {
      "nao": 0.213,
      "amo": 0.215,
      "nino": -1.12,
      "pdo": 0.217,
      "iod": 0.01,
      "anino": 0.383,
      "ismr": 33.875
    }
  },
  {
    "year": 1956,
    "month": 12,
    "data": {
      "nao": 0.137,
      "amo": 0.156,
      "nino": -1.235,
      "pdo": 0.305,
      "iod": 0.179,
      "anino": 0.232,
      "ismr": 33.875
    }
  },
  {
    "year": 1957,
    "month": 1,
    "data": {
      "nao": 0.014,
      "amo": -0.027,
      "nino": 0.156,
      "pdo": 0.305,
      "iod": 0.059,
      "anino": -0.294,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 2,
    "data": {
      "nao": 0.034,
      "amo": -0.016,
      "nino": 0.15,
      "pdo": 0.248,
      "iod": -0.054,
      "anino": -0.421,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 3,
    "data": {
      "nao": 0.079,
      "amo": 0.042,
      "nino": 0.421,
      "pdo": 0.204,
      "iod": 0.095,
      "anino": -0.201,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 4,
    "data": {
      "nao": 0.073,
      "amo": -0.004,
      "nino": 0.64,
      "pdo": 0.253,
      "iod": 0.005,
      "anino": -0.333,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 5,
    "data": {
      "nao": 0.015,
      "amo": -0.051,
      "nino": 0.926,
      "pdo": 0.231,
      "iod": 0.075,
      "anino": -0.316,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 6,
    "data": {
      "nao": 0.026,
      "amo": 0.001,
      "nino": 0.921,
      "pdo": 0.267,
      "iod": -0.234,
      "anino": -0.045,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 7,
    "data": {
      "nao": 0.034,
      "amo": 0.009,
      "nino": 0.753,
      "pdo": 0.346,
      "iod": -0.293,
      "anino": -0.007,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 8,
    "data": {
      "nao": 0.078,
      "amo": 0.073,
      "nino": 0.643,
      "pdo": 0.309,
      "iod": -0.026,
      "anino": 0.164,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 9,
    "data": {
      "nao": 0.085,
      "amo": 0.07,
      "nino": 0.763,
      "pdo": 0.055,
      "iod": 0.103,
      "anino": 0.182,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 10,
    "data": {
      "nao": -0.074,
      "amo": -0.051,
      "nino": -0.575,
      "pdo": 0.241,
      "iod": -0.221,
      "anino": -0.101,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 11,
    "data": {
      "nao": -0.07,
      "amo": -0.073,
      "nino": -0.101,
      "pdo": 0.246,
      "iod": -0.033,
      "anino": -0.124,
      "ismr": -14.791
    }
  },
  {
    "year": 1957,
    "month": 12,
    "data": {
      "nao": -0.002,
      "amo": -0.013,
      "nino": -0.047,
      "pdo": 0.248,
      "iod": 0.21,
      "anino": -0.011,
      "ismr": -14.791
    }
  },
  {
    "year": 1958,
    "month": 1,
    "data": {
      "nao": 0.024,
      "amo": 0.098,
      "nino": 1.971,
      "pdo": 0.095,
      "iod": 0.03,
      "anino": 0.362,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 2,
    "data": {
      "nao": 0.021,
      "amo": 0.146,
      "nino": 1.713,
      "pdo": 0.003,
      "iod": -0.021,
      "anino": 0.689,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 3,
    "data": {
      "nao": 0.06,
      "amo": 0.203,
      "nino": 1.121,
      "pdo": 0.081,
      "iod": -0.117,
      "anino": 0.952,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 4,
    "data": {
      "nao": 0.051,
      "amo": 0.183,
      "nino": 0.663,
      "pdo": 0.06,
      "iod": -0.077,
      "anino": 0.979,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 5,
    "data": {
      "nao": 0.085,
      "amo": 0.158,
      "nino": 0.646,
      "pdo": -0.038,
      "iod": -0.084,
      "anino": 0.832,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 6,
    "data": {
      "nao": 0.065,
      "amo": 0.127,
      "nino": 0.61,
      "pdo": 0.071,
      "iod": -0.287,
      "anino": 0.97,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 7,
    "data": {
      "nao": 0.03,
      "amo": 0.037,
      "nino": 0.544,
      "pdo": 0.059,
      "iod": -0.402,
      "anino": 0.545,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 8,
    "data": {
      "nao": 0.05,
      "amo": 0.047,
      "nino": 0.395,
      "pdo": -0.044,
      "iod": -0.268,
      "anino": 0.462,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 9,
    "data": {
      "nao": 0.081,
      "amo": 0.057,
      "nino": 0.366,
      "pdo": 0.055,
      "iod": -0.277,
      "anino": 0.303,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 10,
    "data": {
      "nao": 0.048,
      "amo": 0.068,
      "nino": 0.795,
      "pdo": 0.057,
      "iod": 0.107,
      "anino": 0.303,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 11,
    "data": {
      "nao": 0.031,
      "amo": 0.068,
      "nino": 1.285,
      "pdo": 0.085,
      "iod": -0.186,
      "anino": 0.27,
      "ismr": 10.419
    }
  },
  {
    "year": 1958,
    "month": 12,
    "data": {
      "nao": -0.005,
      "amo": 0.037,
      "nino": 1.533,
      "pdo": 0.158,
      "iod": -0.095,
      "anino": 0.145,
      "ismr": 10.419
    }
  },
  {
    "year": 1959,
    "month": 1,
    "data": {
      "nao": 0.06,
      "amo": 0.093,
      "nino": 0.849,
      "pdo": 0.011,
      "iod": 0.535,
      "anino": 0.195,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 2,
    "data": {
      "nao": 0.05,
      "amo": 0.071,
      "nino": 0.787,
      "pdo": 0.051,
      "iod": 0.15,
      "anino": 0.129,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 3,
    "data": {
      "nao": 0.058,
      "amo": 0.028,
      "nino": 0.655,
      "pdo": 0.082,
      "iod": 0.041,
      "anino": -0.132,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 4,
    "data": {
      "nao": 0.049,
      "amo": 0.002,
      "nino": 0.734,
      "pdo": 0.092,
      "iod": 0.132,
      "anino": -0.158,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 5,
    "data": {
      "nao": 0.055,
      "amo": -0.003,
      "nino": 0.546,
      "pdo": 0.131,
      "iod": -0.24,
      "anino": -0.213,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 6,
    "data": {
      "nao": -0.019,
      "amo": -0.061,
      "nino": 0.192,
      "pdo": 0.163,
      "iod": -0.388,
      "anino": -0.233,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 7,
    "data": {
      "nao": -0.01,
      "amo": -0.042,
      "nino": -0.086,
      "pdo": 0.169,
      "iod": -0.225,
      "anino": -0.086,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 8,
    "data": {
      "nao": 0.038,
      "amo": 0.003,
      "nino": -0.302,
      "pdo": 0.146,
      "iod": 0.003,
      "anino": -0.18,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 9,
    "data": {
      "nao": 0.045,
      "amo": 0.05,
      "nino": 0.126,
      "pdo": 0.211,
      "iod": 0.045,
      "anino": -0.094,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 10,
    "data": {
      "nao": 0.07,
      "amo": 0.031,
      "nino": 0.399,
      "pdo": 0.062,
      "iod": -0.154,
      "anino": 0.131,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 11,
    "data": {
      "nao": 0.135,
      "amo": 0.108,
      "nino": 0.378,
      "pdo": 0.001,
      "iod": 0.159,
      "anino": 0.166,
      "ismr": 24.128
    }
  },
  {
    "year": 1959,
    "month": 12,
    "data": {
      "nao": 0.126,
      "amo": 0.138,
      "nino": 0.386,
      "pdo": -0.079,
      "iod": 0.27,
      "anino": 0.219,
      "ismr": 24.128
    }
  },
  {
    "year": 1960,
    "month": 1,
    "data": {
      "nao": 0.101,
      "amo": 0.065,
      "nino": 0.183,
      "pdo": -0.05,
      "iod": -0.092,
      "anino": 0.143,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 2,
    "data": {
      "nao": 0.084,
      "amo": 0.087,
      "nino": -0.002,
      "pdo": -0.033,
      "iod": 0.193,
      "anino": 0.407,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 3,
    "data": {
      "nao": 0.066,
      "amo": 0.057,
      "nino": 0.21,
      "pdo": -0.003,
      "iod": -0.026,
      "anino": 0.392,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 4,
    "data": {
      "nao": 0.095,
      "amo": 0.032,
      "nino": 0.164,
      "pdo": -0.037,
      "iod": -0.238,
      "anino": 0.203,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 5,
    "data": {
      "nao": 0.199,
      "amo": 0.127,
      "nino": -0.057,
      "pdo": -0.046,
      "iod": -0.401,
      "anino": 0.293,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 6,
    "data": {
      "nao": 0.225,
      "amo": 0.134,
      "nino": -0.283,
      "pdo": -0.079,
      "iod": -0.138,
      "anino": 0.214,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 7,
    "data": {
      "nao": 0.2,
      "amo": 0.101,
      "nino": -0.226,
      "pdo": 0.164,
      "iod": -0.243,
      "anino": 0.192,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 8,
    "data": {
      "nao": 0.203,
      "amo": 0.121,
      "nino": -0.199,
      "pdo": 0.011,
      "iod": -0.36,
      "anino": 0.076,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 9,
    "data": {
      "nao": 0.139,
      "amo": 0.06,
      "nino": -0.028,
      "pdo": 0.092,
      "iod": -0.212,
      "anino": -0.004,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 10,
    "data": {
      "nao": 0.02,
      "amo": -0.001,
      "nino": 0.492,
      "pdo": 0.177,
      "iod": -0.17,
      "anino": -0.135,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 11,
    "data": {
      "nao": 0.033,
      "amo": -0.024,
      "nino": 0.177,
      "pdo": 0.113,
      "iod": -0.066,
      "anino": -0.17,
      "ismr": -1.963
    }
  },
  {
    "year": 1960,
    "month": 12,
    "data": {
      "nao": 0.045,
      "amo": -0.005,
      "nino": -0.055,
      "pdo": 0.013,
      "iod": -0.164,
      "anino": -0.064,
      "ismr": -1.963
    }
  },
  {
    "year": 1961,
    "month": 1,
    "data": {
      "nao": 0.131,
      "amo": 0.094,
      "nino": 0.052,
      "pdo": -0.084,
      "iod": -0.037,
      "anino": 0.122,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 2,
    "data": {
      "nao": 0.141,
      "amo": 0.096,
      "nino": 0.111,
      "pdo": -0.017,
      "iod": 0.063,
      "anino": 0.036,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 3,
    "data": {
      "nao": 0.195,
      "amo": 0.156,
      "nino": -0.161,
      "pdo": 0.029,
      "iod": 0.048,
      "anino": -0.011,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 4,
    "data": {
      "nao": 0.193,
      "amo": 0.181,
      "nino": -0.206,
      "pdo": 0.03,
      "iod": -0.027,
      "anino": 0.073,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 5,
    "data": {
      "nao": 0.172,
      "amo": 0.126,
      "nino": -0.088,
      "pdo": 0.176,
      "iod": -0.197,
      "anino": -0.016,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 6,
    "data": {
      "nao": 0.154,
      "amo": 0.053,
      "nino": -0.01,
      "pdo": 0.13,
      "iod": 0.151,
      "anino": -0.153,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 7,
    "data": {
      "nao": 0.1,
      "amo": 0.006,
      "nino": -0.322,
      "pdo": 0.185,
      "iod": 0.55,
      "anino": -0.036,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 8,
    "data": {
      "nao": 0.086,
      "amo": 0.003,
      "nino": -0.315,
      "pdo": 0.302,
      "iod": 0.694,
      "anino": 0.089,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 9,
    "data": {
      "nao": 0.067,
      "amo": -0.022,
      "nino": -0.4,
      "pdo": 0.245,
      "iod": 0.727,
      "anino": -0.022,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 10,
    "data": {
      "nao": 0.17,
      "amo": 0.09,
      "nino": -0.149,
      "pdo": -0.081,
      "iod": -0.4,
      "anino": -0.056,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 11,
    "data": {
      "nao": 0.174,
      "amo": 0.092,
      "nino": -0.391,
      "pdo": -0.163,
      "iod": -0.484,
      "anino": 0.042,
      "ismr": 43.172
    }
  },
  {
    "year": 1961,
    "month": 12,
    "data": {
      "nao": 0.138,
      "amo": 0.058,
      "nino": 0.163,
      "pdo": -0.145,
      "iod": -0.325,
      "anino": 0.006,
      "ismr": 43.172
    }
  },
  {
    "year": 1962,
    "month": 1,
    "data": {
      "nao": 0.145,
      "amo": 0.121,
      "nino": -0.591,
      "pdo": 0.239,
      "iod": 0.444,
      "anino": 0.128,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 2,
    "data": {
      "nao": 0.147,
      "amo": 0.131,
      "nino": -0.282,
      "pdo": 0.266,
      "iod": 0.561,
      "anino": 0.084,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 3,
    "data": {
      "nao": 0.066,
      "amo": 0.096,
      "nino": -0.329,
      "pdo": 0.267,
      "iod": 0.33,
      "anino": 0.34,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 4,
    "data": {
      "nao": 0.05,
      "amo": 0.047,
      "nino": -0.255,
      "pdo": 0.305,
      "iod": 0.176,
      "anino": 0.211,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 5,
    "data": {
      "nao": 0.01,
      "amo": 0.014,
      "nino": -0.383,
      "pdo": 0.273,
      "iod": -0.112,
      "anino": 0.339,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 6,
    "data": {
      "nao": -0.075,
      "amo": -0.07,
      "nino": -0.252,
      "pdo": 0.359,
      "iod": -0.147,
      "anino": 0.129,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 7,
    "data": {
      "nao": -0.06,
      "amo": -0.045,
      "nino": -0.236,
      "pdo": 0.488,
      "iod": -0.005,
      "anino": 0.18,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 8,
    "data": {
      "nao": -0.12,
      "amo": -0.081,
      "nino": -0.149,
      "pdo": 0.338,
      "iod": 0.22,
      "anino": 0.142,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 9,
    "data": {
      "nao": -0.012,
      "amo": 0.003,
      "nino": -0.545,
      "pdo": 0.388,
      "iod": 0.239,
      "anino": 0.088,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 10,
    "data": {
      "nao": 0.147,
      "amo": 0.001,
      "nino": -0.297,
      "pdo": 0.258,
      "iod": 0.896,
      "anino": -0.174,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 11,
    "data": {
      "nao": 0.221,
      "amo": 0.085,
      "nino": -0.485,
      "pdo": 0.05,
      "iod": 0.407,
      "anino": -0.094,
      "ismr": -9.419
    }
  },
  {
    "year": 1962,
    "month": 12,
    "data": {
      "nao": 0.194,
      "amo": 0.142,
      "nino": -0.508,
      "pdo": 0.165,
      "iod": 0.322,
      "anino": 0.113,
      "ismr": -9.419
    }
  },
  {
    "year": 1963,
    "month": 1,
    "data": {
      "nao": 0.05,
      "amo": 0.137,
      "nino": -0.37,
      "pdo": 0.203,
      "iod": 0.434,
      "anino": 0.574,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 2,
    "data": {
      "nao": 0.007,
      "amo": 0.101,
      "nino": -0.362,
      "pdo": 0.245,
      "iod": 0.572,
      "anino": 0.566,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 3,
    "data": {
      "nao": -0.002,
      "amo": 0.076,
      "nino": -0.118,
      "pdo": 0.335,
      "iod": 0.374,
      "anino": 0.333,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 4,
    "data": {
      "nao": 0.009,
      "amo": 0.06,
      "nino": -0.001,
      "pdo": 0.294,
      "iod": 0.195,
      "anino": 0.411,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 5,
    "data": {
      "nao": -0.022,
      "amo": -0.012,
      "nino": 0.045,
      "pdo": 0.358,
      "iod": -0.244,
      "anino": 0.235,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 6,
    "data": {
      "nao": 0.025,
      "amo": 0.007,
      "nino": 0.026,
      "pdo": 0.344,
      "iod": 0.047,
      "anino": 0.113,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 7,
    "data": {
      "nao": -0.026,
      "amo": 0.026,
      "nino": 0.45,
      "pdo": 0.314,
      "iod": 0.339,
      "anino": 0.166,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 8,
    "data": {
      "nao": -0.081,
      "amo": 0.002,
      "nino": 0.619,
      "pdo": 0.419,
      "iod": 0.511,
      "anino": 0.273,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 9,
    "data": {
      "nao": -0.155,
      "amo": -0.06,
      "nino": 0.681,
      "pdo": 0.292,
      "iod": 0.384,
      "anino": 0.216,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 10,
    "data": {
      "nao": 0.043,
      "amo": 0.071,
      "nino": -0.366,
      "pdo": 0.095,
      "iod": -0.04,
      "anino": -0.006,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 11,
    "data": {
      "nao": 0.085,
      "amo": 0.121,
      "nino": -0.299,
      "pdo": 0.046,
      "iod": 0.006,
      "anino": 0.235,
      "ismr": 2.615
    }
  },
  {
    "year": 1963,
    "month": 12,
    "data": {
      "nao": 0.1,
      "amo": 0.163,
      "nino": -0.415,
      "pdo": 0.107,
      "iod": 0.237,
      "anino": 0.474,
      "ismr": 2.615
    }
  },
  {
    "year": 1964,
    "month": 1,
    "data": {
      "nao": 0.023,
      "amo": 0.059,
      "nino": 1.022,
      "pdo": 0.229,
      "iod": -0.042,
      "anino": 0.203,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 2,
    "data": {
      "nao": 0.06,
      "amo": 0.101,
      "nino": 0.655,
      "pdo": 0.209,
      "iod": -0.225,
      "anino": 0.385,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 3,
    "data": {
      "nao": 0.05,
      "amo": 0.059,
      "nino": 0.105,
      "pdo": 0.181,
      "iod": 0.197,
      "anino": 0.306,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 4,
    "data": {
      "nao": 0.02,
      "amo": -0.042,
      "nino": -0.08,
      "pdo": 0.243,
      "iod": 0.132,
      "anino": -0.035,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 5,
    "data": {
      "nao": 0.128,
      "amo": 0.079,
      "nino": -0.431,
      "pdo": 0.22,
      "iod": -0.179,
      "anino": 0.092,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 6,
    "data": {
      "nao": 0.088,
      "amo": 0.064,
      "nino": -0.633,
      "pdo": 0.191,
      "iod": -0.029,
      "anino": 0.076,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 7,
    "data": {
      "nao": -0.074,
      "amo": -0.027,
      "nino": -0.77,
      "pdo": 0.066,
      "iod": -0.326,
      "anino": 0.048,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 8,
    "data": {
      "nao": -0.137,
      "amo": -0.118,
      "nino": -0.92,
      "pdo": -0.019,
      "iod": -0.228,
      "anino": -0.07,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 9,
    "data": {
      "nao": -0.1,
      "amo": -0.106,
      "nino": -1.066,
      "pdo": -0.091,
      "iod": -0.473,
      "anino": -0.116,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 10,
    "data": {
      "nao": -0.038,
      "amo": 0.021,
      "nino": 0.956,
      "pdo": 0.202,
      "iod": 0.716,
      "anino": 0.163,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 11,
    "data": {
      "nao": 0.052,
      "amo": 0.107,
      "nino": 1.005,
      "pdo": 0.246,
      "iod": 0.391,
      "anino": 0.272,
      "ismr": 18.775
    }
  },
  {
    "year": 1964,
    "month": 12,
    "data": {
      "nao": 0.047,
      "amo": 0.059,
      "nino": 1.079,
      "pdo": 0.258,
      "iod": 0.158,
      "anino": 0.159,
      "ismr": 18.775
    }
  },
  {
    "year": 1965,
    "month": 1,
    "data": {
      "nao": 0.068,
      "amo": -0.022,
      "nino": -0.65,
      "pdo": 0.072,
      "iod": 0.242,
      "anino": -0.191,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 2,
    "data": {
      "nao": 0.049,
      "amo": -0.028,
      "nino": -0.262,
      "pdo": 0.042,
      "iod": 0.04,
      "anino": -0.19,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 3,
    "data": {
      "nao": 0.047,
      "amo": 0.023,
      "nino": -0.055,
      "pdo": 0.036,
      "iod": 0.167,
      "anino": -0.131,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 4,
    "data": {
      "nao": 0.024,
      "amo": 0.006,
      "nino": 0.054,
      "pdo": -0.029,
      "iod": 0.02,
      "anino": -0.159,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 5,
    "data": {
      "nao": 0.01,
      "amo": -0.002,
      "nino": 0.323,
      "pdo": 0.019,
      "iod": -0.164,
      "anino": -0.178,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 6,
    "data": {
      "nao": -0.012,
      "amo": -0.032,
      "nino": 0.463,
      "pdo": -0.027,
      "iod": -0.168,
      "anino": -0.335,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 7,
    "data": {
      "nao": -0.101,
      "amo": -0.072,
      "nino": 0.631,
      "pdo": -0.028,
      "iod": -0.119,
      "anino": -0.209,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 8,
    "data": {
      "nao": -0.107,
      "amo": -0.068,
      "nino": 0.728,
      "pdo": -0.119,
      "iod": 0.118,
      "anino": -0.178,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 9,
    "data": {
      "nao": -0.134,
      "amo": -0.096,
      "nino": 0.827,
      "pdo": 0.035,
      "iod": 0.14,
      "anino": -0.053,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 10,
    "data": {
      "nao": -0.074,
      "amo": -0.103,
      "nino": -1.04,
      "pdo": -0.124,
      "iod": -0.393,
      "anino": -0.137,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 11,
    "data": {
      "nao": 0.048,
      "amo": -0.022,
      "nino": -1.052,
      "pdo": -0.099,
      "iod": -0.003,
      "anino": -0.03,
      "ismr": -34.491
    }
  },
  {
    "year": 1965,
    "month": 12,
    "data": {
      "nao": 0.074,
      "amo": -0.008,
      "nino": -1.02,
      "pdo": 0.057,
      "iod": 0.218,
      "anino": -0.127,
      "ismr": -34.491
    }
  },
  {
    "year": 1966,
    "month": 1,
    "data": {
      "nao": 0.01,
      "amo": 0.042,
      "nino": 1.259,
      "pdo": 0.104,
      "iod": -0.057,
      "anino": 0.142,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 2,
    "data": {
      "nao": 0.012,
      "amo": 0.1,
      "nino": 0.88,
      "pdo": 0.034,
      "iod": 0.043,
      "anino": 0.398,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 3,
    "data": {
      "nao": 0.022,
      "amo": 0.095,
      "nino": 0.837,
      "pdo": 0.167,
      "iod": -0.281,
      "anino": 0.425,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 4,
    "data": {
      "nao": 0.022,
      "amo": 0.097,
      "nino": 0.431,
      "pdo": 0.074,
      "iod": -0.298,
      "anino": 0.46,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 5,
    "data": {
      "nao": 0.006,
      "amo": 0.046,
      "nino": 0.303,
      "pdo": 0.116,
      "iod": -0.283,
      "anino": 0.323,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 6,
    "data": {
      "nao": 0.034,
      "amo": 0.028,
      "nino": 0.439,
      "pdo": 0.154,
      "iod": 0.133,
      "anino": 0.303,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 7,
    "data": {
      "nao": 0.008,
      "amo": 0.004,
      "nino": 0.478,
      "pdo": 0.069,
      "iod": 0.162,
      "anino": 0.161,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 8,
    "data": {
      "nao": 0.029,
      "amo": 0.026,
      "nino": 0.119,
      "pdo": 0.023,
      "iod": 0.313,
      "anino": -0.005,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 9,
    "data": {
      "nao": -0.011,
      "amo": 0.046,
      "nino": 0.044,
      "pdo": 0.075,
      "iod": 0.313,
      "anino": 0.058,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 10,
    "data": {
      "nao": -0.067,
      "amo": -0.046,
      "nino": 1.384,
      "pdo": -0.023,
      "iod": 0.102,
      "anino": -0.011,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 11,
    "data": {
      "nao": -0.08,
      "amo": -0.057,
      "nino": 1.584,
      "pdo": 0.005,
      "iod": -0.063,
      "anino": 0.039,
      "ismr": -26.856
    }
  },
  {
    "year": 1966,
    "month": 12,
    "data": {
      "nao": -0.018,
      "amo": 0.004,
      "nino": 1.376,
      "pdo": -0.057,
      "iod": -0.191,
      "anino": 0.136,
      "ismr": -26.856
    }
  },
  {
    "year": 1967,
    "month": 1,
    "data": {
      "nao": 0.077,
      "amo": 0.105,
      "nino": -0.107,
      "pdo": 0.166,
      "iod": -0.384,
      "anino": 0.176,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 2,
    "data": {
      "nao": 0.093,
      "amo": 0.092,
      "nino": -0.393,
      "pdo": 0.197,
      "iod": -0.184,
      "anino": 0.03,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 3,
    "data": {
      "nao": 0.085,
      "amo": 0.06,
      "nino": -0.218,
      "pdo": 0.21,
      "iod": 0.26,
      "anino": -0.066,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 4,
    "data": {
      "nao": 0.058,
      "amo": 0.05,
      "nino": -0.137,
      "pdo": 0.212,
      "iod": -0.026,
      "anino": 0.089,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 5,
    "data": {
      "nao": -0.021,
      "amo": -0.053,
      "nino": -0.001,
      "pdo": 0.482,
      "iod": 0.174,
      "anino": -0.201,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 6,
    "data": {
      "nao": -0.065,
      "amo": -0.103,
      "nino": -0.016,
      "pdo": 0.653,
      "iod": 0.3,
      "anino": -0.157,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 7,
    "data": {
      "nao": -0.018,
      "amo": -0.035,
      "nino": -0.107,
      "pdo": 0.627,
      "iod": 0.394,
      "anino": -0.117,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 8,
    "data": {
      "nao": -0.0,
      "amo": 0.007,
      "nino": -0.392,
      "pdo": 0.74,
      "iod": 0.452,
      "anino": -0.196,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 9,
    "data": {
      "nao": 0.013,
      "amo": -0.015,
      "nino": -0.318,
      "pdo": 0.416,
      "iod": 0.521,
      "anino": -0.035,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 10,
    "data": {
      "nao": 0.048,
      "amo": 0.089,
      "nino": 0.028,
      "pdo": 0.164,
      "iod": -0.098,
      "anino": 0.092,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 11,
    "data": {
      "nao": 0.063,
      "amo": 0.081,
      "nino": 0.23,
      "pdo": 0.219,
      "iod": -0.224,
      "anino": 0.31,
      "ismr": 3.203
    }
  },
  {
    "year": 1967,
    "month": 12,
    "data": {
      "nao": 0.075,
      "amo": 0.106,
      "nino": 0.021,
      "pdo": 0.142,
      "iod": -0.205,
      "anino": 0.299,
      "ismr": 3.203
    }
  },
  {
    "year": 1968,
    "month": 1,
    "data": {
      "nao": 0.004,
      "amo": -0.018,
      "nino": -0.429,
      "pdo": 0.242,
      "iod": 0.239,
      "anino": -0.202,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 2,
    "data": {
      "nao": 0.005,
      "amo": -0.007,
      "nino": -0.333,
      "pdo": 0.175,
      "iod": 0.387,
      "anino": -0.092,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 3,
    "data": {
      "nao": -0.009,
      "amo": -0.032,
      "nino": -0.435,
      "pdo": 0.166,
      "iod": 0.19,
      "anino": 0.076,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 4,
    "data": {
      "nao": 0.016,
      "amo": 0.001,
      "nino": -0.388,
      "pdo": 0.231,
      "iod": 0.152,
      "anino": 0.037,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 5,
    "data": {
      "nao": 0.022,
      "amo": 0.014,
      "nino": -0.321,
      "pdo": 0.421,
      "iod": 0.135,
      "anino": -0.025,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 6,
    "data": {
      "nao": -0.046,
      "amo": -0.066,
      "nino": 0.257,
      "pdo": 0.614,
      "iod": 0.207,
      "anino": -0.171,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 7,
    "data": {
      "nao": -0.107,
      "amo": -0.071,
      "nino": 0.186,
      "pdo": 0.343,
      "iod": 0.085,
      "anino": -0.13,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 8,
    "data": {
      "nao": -0.17,
      "amo": -0.072,
      "nino": 0.213,
      "pdo": 0.275,
      "iod": 0.152,
      "anino": -0.098,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 9,
    "data": {
      "nao": -0.092,
      "amo": -0.034,
      "nino": 0.199,
      "pdo": 0.138,
      "iod": -0.006,
      "anino": -0.078,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 10,
    "data": {
      "nao": 0.03,
      "amo": 0.005,
      "nino": -0.083,
      "pdo": 0.286,
      "iod": 0.533,
      "anino": -0.05,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 11,
    "data": {
      "nao": 0.064,
      "amo": 0.014,
      "nino": -0.321,
      "pdo": 0.224,
      "iod": 0.375,
      "anino": -0.198,
      "ismr": -23.163
    }
  },
  {
    "year": 1968,
    "month": 12,
    "data": {
      "nao": 0.059,
      "amo": 0.017,
      "nino": -0.339,
      "pdo": 0.181,
      "iod": 0.279,
      "anino": -0.18,
      "ismr": -23.163
    }
  },
  {
    "year": 1969,
    "month": 1,
    "data": {
      "nao": 0.008,
      "amo": 0.071,
      "nino": 1.238,
      "pdo": 0.182,
      "iod": -0.166,
      "anino": 0.346,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 2,
    "data": {
      "nao": -0.013,
      "amo": 0.111,
      "nino": 1.305,
      "pdo": 0.216,
      "iod": -0.223,
      "anino": 0.676,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 3,
    "data": {
      "nao": -0.034,
      "amo": 0.157,
      "nino": 0.949,
      "pdo": 0.168,
      "iod": -0.062,
      "anino": 1.141,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 4,
    "data": {
      "nao": -0.039,
      "amo": 0.12,
      "nino": 0.753,
      "pdo": 0.153,
      "iod": 0.226,
      "anino": 0.941,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 5,
    "data": {
      "nao": -0.063,
      "amo": 0.074,
      "nino": 0.621,
      "pdo": 0.159,
      "iod": 0.038,
      "anino": 0.792,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 6,
    "data": {
      "nao": -0.047,
      "amo": 0.035,
      "nino": 0.439,
      "pdo": -0.021,
      "iod": -0.271,
      "anino": 0.575,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 7,
    "data": {
      "nao": -0.006,
      "amo": 0.04,
      "nino": 0.352,
      "pdo": 0.119,
      "iod": -0.115,
      "anino": 0.549,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 8,
    "data": {
      "nao": 0.023,
      "amo": 0.009,
      "nino": 0.665,
      "pdo": 0.251,
      "iod": -0.22,
      "anino": 0.376,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 9,
    "data": {
      "nao": -0.043,
      "amo": -0.004,
      "nino": 0.805,
      "pdo": 0.175,
      "iod": -0.031,
      "anino": 0.339,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 10,
    "data": {
      "nao": -0.049,
      "amo": 0.023,
      "nino": 0.562,
      "pdo": 0.095,
      "iod": 0.108,
      "anino": -0.001,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 11,
    "data": {
      "nao": -0.026,
      "amo": 0.025,
      "nino": 0.575,
      "pdo": 0.189,
      "iod": 0.018,
      "anino": 0.088,
      "ismr": -4.053
    }
  },
  {
    "year": 1969,
    "month": 12,
    "data": {
      "nao": -0.035,
      "amo": 0.008,
      "nino": 0.819,
      "pdo": 0.102,
      "iod": 0.003,
      "anino": 0.202,
      "ismr": -4.053
    }
  },
  {
    "year": 1970,
    "month": 1,
    "data": {
      "nao": -0.049,
      "amo": 0.05,
      "nino": 0.976,
      "pdo": -0.023,
      "iod": 0.564,
      "anino": 0.624,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 2,
    "data": {
      "nao": -0.07,
      "amo": 0.032,
      "nino": 0.775,
      "pdo": 0.011,
      "iod": 0.438,
      "anino": 0.647,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 3,
    "data": {
      "nao": -0.035,
      "amo": 0.051,
      "nino": 0.529,
      "pdo": 0.023,
      "iod": 0.221,
      "anino": 0.776,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 4,
    "data": {
      "nao": -0.01,
      "amo": 0.055,
      "nino": 0.362,
      "pdo": 0.12,
      "iod": 0.471,
      "anino": 0.575,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 5,
    "data": {
      "nao": -0.023,
      "amo": 0.002,
      "nino": 0.141,
      "pdo": 0.188,
      "iod": 0.307,
      "anino": 0.535,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 6,
    "data": {
      "nao": -0.053,
      "amo": -0.041,
      "nino": -0.298,
      "pdo": 0.148,
      "iod": -0.143,
      "anino": 0.341,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 7,
    "data": {
      "nao": -0.134,
      "amo": -0.099,
      "nino": -0.589,
      "pdo": 0.015,
      "iod": 0.01,
      "anino": 0.099,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 8,
    "data": {
      "nao": -0.073,
      "amo": -0.037,
      "nino": -0.842,
      "pdo": 0.123,
      "iod": 0.028,
      "anino": 0.018,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 9,
    "data": {
      "nao": -0.095,
      "amo": -0.041,
      "nino": -0.83,
      "pdo": 0.199,
      "iod": -0.121,
      "anino": -0.038,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 10,
    "data": {
      "nao": -0.066,
      "amo": -0.037,
      "nino": 0.671,
      "pdo": -0.183,
      "iod": 0.195,
      "anino": 0.245,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 11,
    "data": {
      "nao": -0.02,
      "amo": 0.026,
      "nino": 0.812,
      "pdo": -0.03,
      "iod": 0.32,
      "anino": 0.402,
      "ismr": 23.156
    }
  },
  {
    "year": 1970,
    "month": 12,
    "data": {
      "nao": -0.009,
      "amo": 0.054,
      "nino": 0.987,
      "pdo": -0.048,
      "iod": 0.388,
      "anino": 0.476,
      "ismr": 23.156
    }
  },
  {
    "year": 1971,
    "month": 1,
    "data": {
      "nao": -0.018,
      "amo": -0.024,
      "nino": -1.47,
      "pdo": 0.194,
      "iod": -0.006,
      "anino": 0.116,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 2,
    "data": {
      "nao": -0.023,
      "amo": -0.036,
      "nino": -1.425,
      "pdo": 0.17,
      "iod": -0.151,
      "anino": 0.045,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 3,
    "data": {
      "nao": -0.03,
      "amo": -0.061,
      "nino": -1.145,
      "pdo": 0.134,
      "iod": 0.166,
      "anino": -0.113,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 4,
    "data": {
      "nao": -0.033,
      "amo": -0.099,
      "nino": -0.828,
      "pdo": 0.195,
      "iod": 0.382,
      "anino": -0.269,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 5,
    "data": {
      "nao": 0.012,
      "amo": -0.066,
      "nino": -0.781,
      "pdo": 0.123,
      "iod": 0.151,
      "anino": -0.393,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 6,
    "data": {
      "nao": -0.017,
      "amo": -0.089,
      "nino": -0.802,
      "pdo": 0.119,
      "iod": 0.141,
      "anino": -0.518,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 7,
    "data": {
      "nao": -0.055,
      "amo": -0.099,
      "nino": -0.638,
      "pdo": 0.206,
      "iod": 0.122,
      "anino": -0.435,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 8,
    "data": {
      "nao": -0.169,
      "amo": -0.144,
      "nino": -0.8,
      "pdo": -0.111,
      "iod": -0.25,
      "anino": -0.363,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 9,
    "data": {
      "nao": -0.166,
      "amo": -0.136,
      "nino": -0.909,
      "pdo": -0.472,
      "iod": -0.216,
      "anino": -0.247,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 10,
    "data": {
      "nao": -0.085,
      "amo": -0.075,
      "nino": -0.982,
      "pdo": 0.331,
      "iod": -0.134,
      "anino": -0.052,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 11,
    "data": {
      "nao": -0.091,
      "amo": -0.057,
      "nino": -1.201,
      "pdo": 0.274,
      "iod": 0.041,
      "anino": 0.062,
      "ismr": 9.915
    }
  },
  {
    "year": 1971,
    "month": 12,
    "data": {
      "nao": -0.04,
      "amo": -0.038,
      "nino": -1.49,
      "pdo": 0.257,
      "iod": -0.068,
      "anino": 0.108,
      "ismr": 9.915
    }
  },
  {
    "year": 1972,
    "month": 1,
    "data": {
      "nao": -0.055,
      "amo": -0.09,
      "nino": -0.551,
      "pdo": 0.011,
      "iod": 0.458,
      "anino": -0.218,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 2,
    "data": {
      "nao": -0.071,
      "amo": -0.11,
      "nino": -0.133,
      "pdo": 0.021,
      "iod": 0.035,
      "anino": -0.252,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 3,
    "data": {
      "nao": -0.056,
      "amo": -0.126,
      "nino": -0.003,
      "pdo": 0.023,
      "iod": 0.155,
      "anino": -0.249,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 4,
    "data": {
      "nao": -0.001,
      "amo": -0.07,
      "nino": 0.313,
      "pdo": 0.006,
      "iod": 0.183,
      "anino": -0.152,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 5,
    "data": {
      "nao": -0.068,
      "amo": -0.168,
      "nino": 0.354,
      "pdo": 0.216,
      "iod": 0.335,
      "anino": -0.333,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 6,
    "data": {
      "nao": -0.073,
      "amo": -0.163,
      "nino": 0.575,
      "pdo": 0.216,
      "iod": 0.726,
      "anino": -0.227,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 7,
    "data": {
      "nao": -0.033,
      "amo": -0.136,
      "nino": 0.749,
      "pdo": 0.057,
      "iod": 0.688,
      "anino": -0.329,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 8,
    "data": {
      "nao": -0.149,
      "amo": -0.19,
      "nino": 1.036,
      "pdo": -0.098,
      "iod": 0.763,
      "anino": -0.486,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 9,
    "data": {
      "nao": -0.191,
      "amo": -0.182,
      "nino": 1.154,
      "pdo": -0.19,
      "iod": 0.907,
      "anino": -0.382,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 10,
    "data": {
      "nao": -0.066,
      "amo": -0.072,
      "nino": -1.066,
      "pdo": -0.276,
      "iod": -0.222,
      "anino": -0.193,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 11,
    "data": {
      "nao": -0.063,
      "amo": -0.07,
      "nino": -0.958,
      "pdo": -0.055,
      "iod": 0.209,
      "anino": -0.133,
      "ismr": -48.575
    }
  },
  {
    "year": 1972,
    "month": 12,
    "data": {
      "nao": -0.07,
      "amo": -0.088,
      "nino": -0.793,
      "pdo": 0.086,
      "iod": 0.322,
      "anino": -0.175,
      "ismr": -48.575
    }
  },
  {
    "year": 1973,
    "month": 1,
    "data": {
      "nao": -0.032,
      "amo": -0.063,
      "nino": 1.468,
      "pdo": -0.018,
      "iod": 0.212,
      "anino": -0.134,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 2,
    "data": {
      "nao": -0.038,
      "amo": -0.052,
      "nino": 0.94,
      "pdo": 0.022,
      "iod": 0.049,
      "anino": -0.068,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 3,
    "data": {
      "nao": -0.002,
      "amo": -0.026,
      "nino": 0.561,
      "pdo": 0.03,
      "iod": 0.077,
      "anino": -0.097,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 4,
    "data": {
      "nao": -0.009,
      "amo": -0.03,
      "nino": 0.13,
      "pdo": 0.122,
      "iod": 0.093,
      "anino": -0.044,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 5,
    "data": {
      "nao": -0.001,
      "amo": -0.015,
      "nino": -0.166,
      "pdo": 0.1,
      "iod": 0.224,
      "anino": -0.034,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 6,
    "data": {
      "nao": 0.017,
      "amo": 0.009,
      "nino": -0.499,
      "pdo": 0.046,
      "iod": 0.013,
      "anino": -0.042,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 7,
    "data": {
      "nao": 0.042,
      "amo": 0.009,
      "nino": -0.664,
      "pdo": -0.14,
      "iod": -0.013,
      "anino": -0.035,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 8,
    "data": {
      "nao": -0.056,
      "amo": -0.051,
      "nino": -0.929,
      "pdo": -0.039,
      "iod": -0.131,
      "anino": -0.158,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 9,
    "data": {
      "nao": -0.019,
      "amo": -0.023,
      "nino": -1.116,
      "pdo": -0.083,
      "iod": -0.048,
      "anino": -0.223,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 10,
    "data": {
      "nao": -0.193,
      "amo": -0.168,
      "nino": 1.536,
      "pdo": -0.234,
      "iod": 0.554,
      "anino": -0.077,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 11,
    "data": {
      "nao": -0.135,
      "amo": -0.113,
      "nino": 1.607,
      "pdo": -0.2,
      "iod": 0.577,
      "anino": -0.075,
      "ismr": 16.584
    }
  },
  {
    "year": 1973,
    "month": 12,
    "data": {
      "nao": -0.068,
      "amo": -0.093,
      "nino": 1.728,
      "pdo": -0.032,
      "iod": 0.348,
      "anino": -0.179,
      "ismr": 16.584
    }
  },
  {
    "year": 1974,
    "month": 1,
    "data": {
      "nao": -0.035,
      "amo": -0.079,
      "nino": -1.934,
      "pdo": 0.18,
      "iod": 0.242,
      "anino": -0.281,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 2,
    "data": {
      "nao": -0.017,
      "amo": -0.081,
      "nino": -1.579,
      "pdo": 0.228,
      "iod": 0.255,
      "anino": -0.381,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 3,
    "data": {
      "nao": -0.032,
      "amo": -0.138,
      "nino": -1.101,
      "pdo": 0.114,
      "iod": 0.364,
      "anino": -0.613,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 4,
    "data": {
      "nao": -0.058,
      "amo": -0.221,
      "nino": -0.746,
      "pdo": 0.072,
      "iod": 0.104,
      "anino": -0.898,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 5,
    "data": {
      "nao": -0.068,
      "amo": -0.244,
      "nino": -0.703,
      "pdo": 0.051,
      "iod": 0.032,
      "anino": -0.762,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 6,
    "data": {
      "nao": -0.086,
      "amo": -0.238,
      "nino": -0.568,
      "pdo": 0.056,
      "iod": 0.436,
      "anino": -0.64,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 7,
    "data": {
      "nao": -0.135,
      "amo": -0.281,
      "nino": -0.666,
      "pdo": -0.0,
      "iod": 0.237,
      "anino": -0.454,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 8,
    "data": {
      "nao": -0.124,
      "amo": -0.259,
      "nino": -0.417,
      "pdo": 0.008,
      "iod": -0.064,
      "anino": -0.429,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 9,
    "data": {
      "nao": -0.156,
      "amo": -0.275,
      "nino": -0.402,
      "pdo": 0.138,
      "iod": -0.202,
      "anino": -0.426,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 10,
    "data": {
      "nao": -0.08,
      "amo": -0.09,
      "nino": -1.177,
      "pdo": 0.006,
      "iod": 0.038,
      "anino": -0.356,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 11,
    "data": {
      "nao": -0.105,
      "amo": -0.102,
      "nino": -1.664,
      "pdo": 0.174,
      "iod": 0.137,
      "anino": -0.351,
      "ismr": -24.757
    }
  },
  {
    "year": 1974,
    "month": 12,
    "data": {
      "nao": -0.105,
      "amo": -0.087,
      "nino": -1.976,
      "pdo": 0.115,
      "iod": 0.055,
      "anino": -0.264,
      "ismr": -24.757
    }
  },
  {
    "year": 1975,
    "month": 1,
    "data": {
      "nao": -0.017,
      "amo": -0.059,
      "nino": -0.397,
      "pdo": 0.111,
      "iod": -0.319,
      "anino": -0.268,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 2,
    "data": {
      "nao": -0.007,
      "amo": -0.08,
      "nino": -0.379,
      "pdo": 0.037,
      "iod": -0.173,
      "anino": -0.419,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 3,
    "data": {
      "nao": -0.021,
      "amo": -0.103,
      "nino": -0.453,
      "pdo": 0.053,
      "iod": -0.431,
      "anino": -0.457,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 4,
    "data": {
      "nao": -0.043,
      "amo": -0.129,
      "nino": -0.556,
      "pdo": 0.039,
      "iod": -0.087,
      "anino": -0.441,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 5,
    "data": {
      "nao": 0.006,
      "amo": -0.119,
      "nino": -0.729,
      "pdo": 0.042,
      "iod": 0.029,
      "anino": -0.633,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 6,
    "data": {
      "nao": -0.067,
      "amo": -0.114,
      "nino": -0.943,
      "pdo": -0.035,
      "iod": 0.409,
      "anino": -0.438,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 7,
    "data": {
      "nao": -0.028,
      "amo": -0.043,
      "nino": -1.05,
      "pdo": -0.161,
      "iod": 0.359,
      "anino": -0.315,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 8,
    "data": {
      "nao": 0.04,
      "amo": 0.003,
      "nino": -1.138,
      "pdo": -0.197,
      "iod": 0.013,
      "anino": -0.227,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 9,
    "data": {
      "nao": -0.052,
      "amo": -0.093,
      "nino": -1.464,
      "pdo": -0.121,
      "iod": -0.375,
      "anino": -0.293,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 10,
    "data": {
      "nao": -0.161,
      "amo": -0.277,
      "nino": -0.715,
      "pdo": 0.226,
      "iod": -0.336,
      "anino": -0.415,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 11,
    "data": {
      "nao": -0.093,
      "amo": -0.208,
      "nino": -0.668,
      "pdo": 0.058,
      "iod": -0.094,
      "anino": -0.487,
      "ismr": 28.928
    }
  },
  {
    "year": 1975,
    "month": 12,
    "data": {
      "nao": -0.032,
      "amo": -0.135,
      "nino": -0.671,
      "pdo": 0.098,
      "iod": -0.165,
      "anino": -0.454,
      "ismr": 28.928
    }
  },
  {
    "year": 1976,
    "month": 1,
    "data": {
      "nao": -0.071,
      "amo": -0.119,
      "nino": -1.471,
      "pdo": 0.017,
      "iod": 0.163,
      "anino": -0.351,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 2,
    "data": {
      "nao": -0.087,
      "amo": -0.174,
      "nino": -0.924,
      "pdo": -0.045,
      "iod": 0.226,
      "anino": -0.521,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 3,
    "data": {
      "nao": -0.063,
      "amo": -0.194,
      "nino": -0.668,
      "pdo": 0.004,
      "iod": 0.093,
      "anino": -0.782,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 4,
    "data": {
      "nao": -0.056,
      "amo": -0.153,
      "nino": -0.488,
      "pdo": -0.09,
      "iod": -0.035,
      "anino": -0.594,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 5,
    "data": {
      "nao": -0.046,
      "amo": -0.171,
      "nino": -0.233,
      "pdo": -0.178,
      "iod": 0.232,
      "anino": -0.707,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 6,
    "data": {
      "nao": 0.002,
      "amo": -0.183,
      "nino": 0.011,
      "pdo": -0.207,
      "iod": 0.508,
      "anino": -0.634,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 7,
    "data": {
      "nao": 0.081,
      "amo": -0.099,
      "nino": 0.047,
      "pdo": -0.514,
      "iod": 0.545,
      "anino": -0.467,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 8,
    "data": {
      "nao": -0.031,
      "amo": -0.07,
      "nino": 0.094,
      "pdo": -0.592,
      "iod": 0.17,
      "anino": -0.068,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 9,
    "data": {
      "nao": -0.166,
      "amo": -0.117,
      "nino": 0.675,
      "pdo": -0.522,
      "iod": 0.117,
      "anino": 0.031,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 10,
    "data": {
      "nao": -0.11,
      "amo": -0.149,
      "nino": -1.515,
      "pdo": -0.022,
      "iod": -0.619,
      "anino": -0.369,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 11,
    "data": {
      "nao": -0.024,
      "amo": -0.114,
      "nino": -1.647,
      "pdo": -0.065,
      "iod": -0.307,
      "anino": -0.479,
      "ismr": 2.462
    }
  },
  {
    "year": 1976,
    "month": 12,
    "data": {
      "nao": -0.046,
      "amo": -0.111,
      "nino": -1.547,
      "pdo": 0.032,
      "iod": -0.074,
      "anino": -0.348,
      "ismr": 2.462
    }
  },
  {
    "year": 1977,
    "month": 1,
    "data": {
      "nao": -0.082,
      "amo": -0.121,
      "nino": 0.84,
      "pdo": -0.135,
      "iod": 0.127,
      "anino": -0.085,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 2,
    "data": {
      "nao": -0.033,
      "amo": -0.078,
      "nino": 0.519,
      "pdo": -0.053,
      "iod": 0.11,
      "anino": -0.141,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 3,
    "data": {
      "nao": 0.026,
      "amo": -0.01,
      "nino": 0.244,
      "pdo": -0.092,
      "iod": 0.436,
      "anino": -0.163,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 4,
    "data": {
      "nao": 0.014,
      "amo": -0.025,
      "nino": 0.071,
      "pdo": -0.116,
      "iod": 0.125,
      "anino": -0.125,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 5,
    "data": {
      "nao": 0.032,
      "amo": -0.015,
      "nino": 0.308,
      "pdo": -0.089,
      "iod": -0.098,
      "anino": -0.146,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 6,
    "data": {
      "nao": -0.006,
      "amo": -0.001,
      "nino": 0.319,
      "pdo": -0.047,
      "iod": 0.148,
      "anino": -0.007,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 7,
    "data": {
      "nao": -0.01,
      "amo": -0.014,
      "nino": 0.385,
      "pdo": -0.025,
      "iod": 0.35,
      "anino": -0.15,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 8,
    "data": {
      "nao": -0.043,
      "amo": -0.07,
      "nino": 0.319,
      "pdo": 0.079,
      "iod": 0.273,
      "anino": -0.21,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 9,
    "data": {
      "nao": -0.156,
      "amo": -0.107,
      "nino": 0.588,
      "pdo": 0.323,
      "iod": 0.263,
      "anino": -0.209,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 10,
    "data": {
      "nao": -0.155,
      "amo": -0.147,
      "nino": 0.573,
      "pdo": -0.462,
      "iod": -0.044,
      "anino": 0.114,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 11,
    "data": {
      "nao": -0.149,
      "amo": -0.196,
      "nino": 0.617,
      "pdo": -0.34,
      "iod": -0.04,
      "anino": -0.029,
      "ismr": 9.071
    }
  },
  {
    "year": 1977,
    "month": 12,
    "data": {
      "nao": -0.124,
      "amo": -0.192,
      "nino": 0.522,
      "pdo": -0.126,
      "iod": 0.223,
      "anino": -0.348,
      "ismr": 9.071
    }
  },
  {
    "year": 1978,
    "month": 1,
    "data": {
      "nao": -0.035,
      "amo": -0.008,
      "nino": 0.747,
      "pdo": -0.134,
      "iod": -0.251,
      "anino": 0.096,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 2,
    "data": {
      "nao": -0.029,
      "amo": 0.029,
      "nino": 0.59,
      "pdo": -0.149,
      "iod": -0.098,
      "anino": 0.268,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 3,
    "data": {
      "nao": -0.034,
      "amo": 0.015,
      "nino": 0.394,
      "pdo": -0.169,
      "iod": -0.242,
      "anino": 0.348,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 4,
    "data": {
      "nao": -0.064,
      "amo": -0.029,
      "nino": -0.138,
      "pdo": -0.091,
      "iod": -0.036,
      "anino": 0.346,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 5,
    "data": {
      "nao": -0.06,
      "amo": -0.061,
      "nino": -0.222,
      "pdo": -0.131,
      "iod": -0.226,
      "anino": 0.172,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 6,
    "data": {
      "nao": -0.089,
      "amo": -0.111,
      "nino": -0.521,
      "pdo": -0.085,
      "iod": 0.069,
      "anino": -0.04,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 7,
    "data": {
      "nao": -0.153,
      "amo": -0.165,
      "nino": -0.541,
      "pdo": 0.051,
      "iod": 0.287,
      "anino": -0.195,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 8,
    "data": {
      "nao": -0.115,
      "amo": -0.137,
      "nino": -0.353,
      "pdo": 0.024,
      "iod": 0.142,
      "anino": -0.195,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 9,
    "data": {
      "nao": -0.115,
      "amo": -0.115,
      "nino": -0.219,
      "pdo": 0.051,
      "iod": 0.301,
      "anino": -0.225,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 10,
    "data": {
      "nao": -0.089,
      "amo": -0.112,
      "nino": 0.779,
      "pdo": 0.093,
      "iod": 0.454,
      "anino": -0.24,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 11,
    "data": {
      "nao": 0.02,
      "amo": -0.037,
      "nino": 0.87,
      "pdo": -0.255,
      "iod": 0.309,
      "anino": -0.257,
      "ismr": 15.606
    }
  },
  {
    "year": 1978,
    "month": 12,
    "data": {
      "nao": -0.028,
      "amo": -0.056,
      "nino": 0.983,
      "pdo": -0.108,
      "iod": 0.134,
      "anino": -0.187,
      "ismr": 15.606
    }
  },
  {
    "year": 1979,
    "month": 1,
    "data": {
      "nao": -0.072,
      "amo": -0.027,
      "nino": 0.266,
      "pdo": 0.07,
      "iod": 0.374,
      "anino": 0.133,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 2,
    "data": {
      "nao": -0.089,
      "amo": -0.011,
      "nino": 0.194,
      "pdo": 0.088,
      "iod": 0.039,
      "anino": 0.338,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 3,
    "data": {
      "nao": -0.091,
      "amo": -0.045,
      "nino": 0.389,
      "pdo": 0.073,
      "iod": -0.136,
      "anino": 0.211,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 4,
    "data": {
      "nao": -0.076,
      "amo": -0.023,
      "nino": 0.478,
      "pdo": 0.015,
      "iod": -0.071,
      "anino": 0.322,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 5,
    "data": {
      "nao": -0.066,
      "amo": 0.015,
      "nino": 0.311,
      "pdo": -0.156,
      "iod": 0.183,
      "anino": 0.382,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 6,
    "data": {
      "nao": 0.003,
      "amo": 0.111,
      "nino": 0.218,
      "pdo": -0.1,
      "iod": 0.337,
      "anino": 0.495,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 7,
    "data": {
      "nao": -0.052,
      "amo": 0.006,
      "nino": 0.062,
      "pdo": -0.015,
      "iod": 0.115,
      "anino": 0.274,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 8,
    "data": {
      "nao": -0.112,
      "amo": -0.049,
      "nino": 0.07,
      "pdo": 0.179,
      "iod": -0.009,
      "anino": 0.109,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 9,
    "data": {
      "nao": -0.105,
      "amo": -0.027,
      "nino": 0.22,
      "pdo": 0.127,
      "iod": -0.103,
      "anino": 0.02,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 10,
    "data": {
      "nao": -0.152,
      "amo": -0.106,
      "nino": -0.099,
      "pdo": 0.1,
      "iod": 0.155,
      "anino": -0.073,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 11,
    "data": {
      "nao": -0.055,
      "amo": -0.019,
      "nino": 0.04,
      "pdo": 0.005,
      "iod": 0.089,
      "anino": 0.028,
      "ismr": -34.785
    }
  },
  {
    "year": 1979,
    "month": 12,
    "data": {
      "nao": -0.049,
      "amo": -0.044,
      "nino": 0.093,
      "pdo": 0.073,
      "iod": 0.064,
      "anino": -0.129,
      "ismr": -34.785
    }
  },
  {
    "year": 1980,
    "month": 1,
    "data": {
      "nao": 0.005,
      "amo": 0.048,
      "nino": 0.815,
      "pdo": -0.004,
      "iod": -0.009,
      "anino": 0.364,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 2,
    "data": {
      "nao": -0.009,
      "amo": 0.043,
      "nino": 0.534,
      "pdo": -0.145,
      "iod": -0.128,
      "anino": 0.398,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 3,
    "data": {
      "nao": -0.018,
      "amo": -0.013,
      "nino": 0.295,
      "pdo": -0.087,
      "iod": -0.276,
      "anino": 0.21,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 4,
    "data": {
      "nao": 0.022,
      "amo": 0.063,
      "nino": 0.401,
      "pdo": -0.263,
      "iod": 0.287,
      "anino": 0.442,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 5,
    "data": {
      "nao": 0.055,
      "amo": 0.091,
      "nino": 0.485,
      "pdo": -0.309,
      "iod": 0.332,
      "anino": 0.627,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 6,
    "data": {
      "nao": 0.048,
      "amo": 0.058,
      "nino": 0.412,
      "pdo": -0.086,
      "iod": -0.198,
      "anino": 0.531,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 7,
    "data": {
      "nao": 0.008,
      "amo": -0.002,
      "nino": 0.236,
      "pdo": 0.001,
      "iod": -0.057,
      "anino": 0.309,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 8,
    "data": {
      "nao": 0.036,
      "amo": 0.005,
      "nino": -0.015,
      "pdo": -0.017,
      "iod": 0.008,
      "anino": 0.269,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 9,
    "data": {
      "nao": 0.003,
      "amo": -0.006,
      "nino": 0.075,
      "pdo": 0.028,
      "iod": -0.019,
      "anino": 0.23,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 10,
    "data": {
      "nao": -0.055,
      "amo": -0.004,
      "nino": 0.4,
      "pdo": -0.082,
      "iod": -0.289,
      "anino": 0.063,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 11,
    "data": {
      "nao": -0.023,
      "amo": 0.001,
      "nino": 0.318,
      "pdo": -0.048,
      "iod": -0.227,
      "anino": 0.125,
      "ismr": 9.0
    }
  },
  {
    "year": 1980,
    "month": 12,
    "data": {
      "nao": 0.007,
      "amo": 0.035,
      "nino": 0.586,
      "pdo": 0.024,
      "iod": 0.172,
      "anino": 0.155,
      "ismr": 9.0
    }
  },
  {
    "year": 1981,
    "month": 1,
    "data": {
      "nao": -0.058,
      "amo": -0.01,
      "nino": 0.076,
      "pdo": -0.042,
      "iod": 0.155,
      "anino": 0.414,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 2,
    "data": {
      "nao": -0.026,
      "amo": -0.004,
      "nino": -0.324,
      "pdo": -0.092,
      "iod": 0.18,
      "anino": 0.412,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 3,
    "data": {
      "nao": -0.025,
      "amo": 0.093,
      "nino": -0.235,
      "pdo": -0.107,
      "iod": 0.047,
      "anino": 0.803,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 4,
    "data": {
      "nao": -0.001,
      "amo": 0.068,
      "nino": -0.046,
      "pdo": -0.021,
      "iod": 0.222,
      "anino": 0.449,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 5,
    "data": {
      "nao": 0.008,
      "amo": 0.034,
      "nino": -0.059,
      "pdo": 0.03,
      "iod": 0.122,
      "anino": 0.436,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 6,
    "data": {
      "nao": 0.029,
      "amo": 0.061,
      "nino": -0.227,
      "pdo": 0.128,
      "iod": -0.0,
      "anino": 0.201,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 7,
    "data": {
      "nao": -0.078,
      "amo": -0.024,
      "nino": -0.333,
      "pdo": 0.054,
      "iod": -0.072,
      "anino": 0.315,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 8,
    "data": {
      "nao": -0.057,
      "amo": -0.024,
      "nino": -0.322,
      "pdo": 0.074,
      "iod": -0.134,
      "anino": 0.117,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 9,
    "data": {
      "nao": -0.025,
      "amo": 0.025,
      "nino": -0.115,
      "pdo": 0.075,
      "iod": -0.213,
      "anino": 0.108,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 10,
    "data": {
      "nao": -0.026,
      "amo": -0.013,
      "nino": 0.061,
      "pdo": -0.321,
      "iod": 0.118,
      "anino": 0.097,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 11,
    "data": {
      "nao": -0.046,
      "amo": -0.047,
      "nino": 0.088,
      "pdo": -0.203,
      "iod": 0.038,
      "anino": -0.02,
      "ismr": 1.359
    }
  },
  {
    "year": 1981,
    "month": 12,
    "data": {
      "nao": -0.082,
      "amo": -0.061,
      "nino": 0.145,
      "pdo": -0.031,
      "iod": 0.056,
      "anino": 0.017,
      "ismr": 1.359
    }
  },
  {
    "year": 1982,
    "month": 1,
    "data": {
      "nao": -0.056,
      "amo": 0.036,
      "nino": 0.038,
      "pdo": 0.108,
      "iod": 0.234,
      "anino": 0.247,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 2,
    "data": {
      "nao": -0.052,
      "amo": 0.002,
      "nino": 0.108,
      "pdo": 0.052,
      "iod": 0.202,
      "anino": 0.084,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 3,
    "data": {
      "nao": 0.006,
      "amo": 0.029,
      "nino": 0.191,
      "pdo": 0.022,
      "iod": 0.165,
      "anino": 0.026,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 4,
    "data": {
      "nao": -0.037,
      "amo": -0.012,
      "nino": 0.316,
      "pdo": -0.059,
      "iod": 0.229,
      "anino": -0.021,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 5,
    "data": {
      "nao": -0.053,
      "amo": -0.027,
      "nino": 0.658,
      "pdo": 0.024,
      "iod": 0.306,
      "anino": 0.122,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 6,
    "data": {
      "nao": -0.102,
      "amo": -0.06,
      "nino": 0.759,
      "pdo": -0.054,
      "iod": 0.431,
      "anino": 0.038,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 7,
    "data": {
      "nao": -0.108,
      "amo": -0.082,
      "nino": 0.551,
      "pdo": -0.401,
      "iod": 0.544,
      "anino": -0.07,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 8,
    "data": {
      "nao": -0.151,
      "amo": -0.095,
      "nino": 0.828,
      "pdo": -0.331,
      "iod": 0.506,
      "anino": -0.138,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 9,
    "data": {
      "nao": -0.199,
      "amo": -0.098,
      "nino": 0.998,
      "pdo": -0.313,
      "iod": 0.557,
      "anino": -0.205,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 10,
    "data": {
      "nao": -0.075,
      "amo": -0.02,
      "nino": -0.181,
      "pdo": 0.148,
      "iod": -0.003,
      "anino": -0.039,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 11,
    "data": {
      "nao": -0.018,
      "amo": 0.025,
      "nino": -0.244,
      "pdo": 0.119,
      "iod": -0.089,
      "anino": 0.168,
      "ismr": -27.832
    }
  },
  {
    "year": 1982,
    "month": 12,
    "data": {
      "nao": -0.009,
      "amo": 0.079,
      "nino": -0.159,
      "pdo": 0.062,
      "iod": -0.037,
      "anino": 0.322,
      "ismr": -27.832
    }
  },
  {
    "year": 1983,
    "month": 1,
    "data": {
      "nao": -0.029,
      "amo": -0.018,
      "nino": 1.824,
      "pdo": -0.091,
      "iod": -0.036,
      "anino": -0.212,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 2,
    "data": {
      "nao": -0.027,
      "amo": 0.037,
      "nino": 1.782,
      "pdo": -0.237,
      "iod": -0.109,
      "anino": 0.122,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 3,
    "data": {
      "nao": 0.019,
      "amo": 0.117,
      "nino": 1.344,
      "pdo": -0.234,
      "iod": -0.365,
      "anino": 0.596,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 4,
    "data": {
      "nao": 0.002,
      "amo": 0.08,
      "nino": 0.903,
      "pdo": -0.226,
      "iod": -0.282,
      "anino": 0.549,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 5,
    "data": {
      "nao": 0.025,
      "amo": 0.065,
      "nino": 0.874,
      "pdo": -0.211,
      "iod": 0.076,
      "anino": 0.333,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 6,
    "data": {
      "nao": -0.045,
      "amo": 0.034,
      "nino": 0.471,
      "pdo": -0.337,
      "iod": 0.535,
      "anino": 0.384,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 7,
    "data": {
      "nao": -0.018,
      "amo": 0.071,
      "nino": 0.284,
      "pdo": -0.535,
      "iod": 0.651,
      "anino": 0.204,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 8,
    "data": {
      "nao": -0.113,
      "amo": 0.011,
      "nino": 0.27,
      "pdo": -0.342,
      "iod": 0.413,
      "anino": 0.02,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 9,
    "data": {
      "nao": -0.124,
      "amo": -0.035,
      "nino": -0.364,
      "pdo": -0.063,
      "iod": 0.175,
      "anino": -0.033,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 10,
    "data": {
      "nao": -0.148,
      "amo": -0.123,
      "nino": 1.313,
      "pdo": -0.189,
      "iod": 0.733,
      "anino": -0.331,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 11,
    "data": {
      "nao": -0.12,
      "amo": -0.135,
      "nino": 1.642,
      "pdo": -0.019,
      "iod": 0.363,
      "anino": -0.419,
      "ismr": 27.228
    }
  },
  {
    "year": 1983,
    "month": 12,
    "data": {
      "nao": -0.085,
      "amo": -0.11,
      "nino": 1.795,
      "pdo": -0.031,
      "iod": 0.059,
      "anino": -0.48,
      "ismr": 27.228
    }
  },
  {
    "year": 1984,
    "month": 1,
    "data": {
      "nao": -0.012,
      "amo": 0.012,
      "nino": -0.373,
      "pdo": 0.089,
      "iod": -0.062,
      "anino": 0.067,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 2,
    "data": {
      "nao": -0.006,
      "amo": 0.003,
      "nino": -0.574,
      "pdo": 0.105,
      "iod": -0.087,
      "anino": -0.027,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 3,
    "data": {
      "nao": -0.044,
      "amo": -0.032,
      "nino": -0.391,
      "pdo": 0.097,
      "iod": -0.004,
      "anino": -0.192,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 4,
    "data": {
      "nao": 0.001,
      "amo": -0.011,
      "nino": -0.361,
      "pdo": 0.027,
      "iod": 0.182,
      "anino": -0.171,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 5,
    "data": {
      "nao": -0.002,
      "amo": -0.04,
      "nino": -0.443,
      "pdo": 0.113,
      "iod": -0.371,
      "anino": -0.154,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 6,
    "data": {
      "nao": -0.117,
      "amo": -0.179,
      "nino": -0.393,
      "pdo": 0.257,
      "iod": -0.219,
      "anino": -0.18,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 7,
    "data": {
      "nao": -0.102,
      "amo": -0.125,
      "nino": -0.333,
      "pdo": 0.22,
      "iod": -0.128,
      "anino": -0.172,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 8,
    "data": {
      "nao": -0.051,
      "amo": -0.056,
      "nino": -0.371,
      "pdo": 0.097,
      "iod": -0.253,
      "anino": -0.255,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 9,
    "data": {
      "nao": -0.085,
      "amo": -0.052,
      "nino": -0.383,
      "pdo": 0.094,
      "iod": -0.182,
      "anino": -0.254,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 10,
    "data": {
      "nao": -0.078,
      "amo": -0.031,
      "nino": -0.721,
      "pdo": -0.07,
      "iod": 0.118,
      "anino": -0.139,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 11,
    "data": {
      "nao": -0.071,
      "amo": 0.001,
      "nino": -0.702,
      "pdo": -0.057,
      "iod": 0.037,
      "anino": 0.032,
      "ismr": -2.488
    }
  },
  {
    "year": 1984,
    "month": 12,
    "data": {
      "nao": -0.024,
      "amo": 0.037,
      "nino": -0.537,
      "pdo": -0.013,
      "iod": 0.2,
      "anino": 0.175,
      "ismr": -2.488
    }
  },
  {
    "year": 1985,
    "month": 1,
    "data": {
      "nao": -0.04,
      "amo": -0.132,
      "nino": -0.685,
      "pdo": 0.023,
      "iod": -0.147,
      "anino": -0.371,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 2,
    "data": {
      "nao": -0.048,
      "amo": -0.135,
      "nino": -0.735,
      "pdo": 0.033,
      "iod": -0.459,
      "anino": -0.303,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 3,
    "data": {
      "nao": -0.016,
      "amo": -0.143,
      "nino": -0.684,
      "pdo": 0.068,
      "iod": -0.248,
      "anino": -0.495,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 4,
    "data": {
      "nao": -0.074,
      "amo": -0.167,
      "nino": -0.668,
      "pdo": -0.024,
      "iod": -0.025,
      "anino": -0.49,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 5,
    "data": {
      "nao": -0.037,
      "amo": -0.133,
      "nino": -0.576,
      "pdo": -0.11,
      "iod": -0.083,
      "anino": -0.494,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 6,
    "data": {
      "nao": 0.013,
      "amo": -0.041,
      "nino": -0.549,
      "pdo": -0.192,
      "iod": -0.481,
      "anino": -0.127,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 7,
    "data": {
      "nao": 0.047,
      "amo": -0.042,
      "nino": -0.296,
      "pdo": -0.28,
      "iod": -0.231,
      "anino": 0.08,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 8,
    "data": {
      "nao": -0.077,
      "amo": -0.147,
      "nino": -0.087,
      "pdo": -0.322,
      "iod": -0.18,
      "anino": 0.066,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 9,
    "data": {
      "nao": -0.064,
      "amo": -0.123,
      "nino": -0.17,
      "pdo": -0.105,
      "iod": -0.004,
      "anino": -0.054,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 10,
    "data": {
      "nao": -0.101,
      "amo": -0.134,
      "nino": -0.446,
      "pdo": 0.005,
      "iod": -0.227,
      "anino": -0.377,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 11,
    "data": {
      "nao": -0.084,
      "amo": -0.157,
      "nino": -0.658,
      "pdo": 0.065,
      "iod": -0.199,
      "anino": -0.529,
      "ismr": -21.704
    }
  },
  {
    "year": 1985,
    "month": 12,
    "data": {
      "nao": -0.008,
      "amo": -0.115,
      "nino": -0.806,
      "pdo": 0.014,
      "iod": -0.115,
      "anino": -0.537,
      "ismr": -21.704
    }
  },
  {
    "year": 1986,
    "month": 1,
    "data": {
      "nao": -0.071,
      "amo": -0.112,
      "nino": -0.232,
      "pdo": 0.081,
      "iod": -0.063,
      "anino": -0.415,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 2,
    "data": {
      "nao": -0.069,
      "amo": -0.118,
      "nino": -0.075,
      "pdo": -0.013,
      "iod": 0.124,
      "anino": -0.325,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 3,
    "data": {
      "nao": -0.051,
      "amo": -0.12,
      "nino": 0.006,
      "pdo": -0.077,
      "iod": 0.315,
      "anino": -0.338,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 4,
    "data": {
      "nao": -0.08,
      "amo": -0.125,
      "nino": -0.032,
      "pdo": -0.014,
      "iod": 0.206,
      "anino": -0.343,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 5,
    "data": {
      "nao": -0.03,
      "amo": -0.076,
      "nino": -0.0,
      "pdo": -0.091,
      "iod": 0.408,
      "anino": -0.317,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 6,
    "data": {
      "nao": -0.06,
      "amo": -0.097,
      "nino": 0.146,
      "pdo": -0.134,
      "iod": 0.143,
      "anino": -0.29,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 7,
    "data": {
      "nao": -0.048,
      "amo": -0.078,
      "nino": 0.379,
      "pdo": -0.265,
      "iod": -0.152,
      "anino": -0.211,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 8,
    "data": {
      "nao": -0.081,
      "amo": -0.129,
      "nino": 0.516,
      "pdo": -0.094,
      "iod": 0.024,
      "anino": -0.286,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 9,
    "data": {
      "nao": -0.113,
      "amo": -0.101,
      "nino": 0.83,
      "pdo": 0.108,
      "iod": 0.159,
      "anino": -0.169,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 10,
    "data": {
      "nao": -0.053,
      "amo": -0.113,
      "nino": -0.254,
      "pdo": -0.004,
      "iod": -0.088,
      "anino": -0.229,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 11,
    "data": {
      "nao": -0.096,
      "amo": -0.111,
      "nino": -0.085,
      "pdo": 0.177,
      "iod": -0.081,
      "anino": -0.093,
      "ismr": -25.894
    }
  },
  {
    "year": 1986,
    "month": 12,
    "data": {
      "nao": -0.066,
      "amo": -0.105,
      "nino": -0.146,
      "pdo": 0.112,
      "iod": -0.252,
      "anino": -0.276,
      "ismr": -25.894
    }
  },
  {
    "year": 1987,
    "month": 1,
    "data": {
      "nao": -0.044,
      "amo": -0.057,
      "nino": 1.311,
      "pdo": -0.037,
      "iod": -0.01,
      "anino": -0.157,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 2,
    "data": {
      "nao": -0.051,
      "amo": -0.033,
      "nino": 1.261,
      "pdo": -0.116,
      "iod": 0.011,
      "anino": 0.005,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 3,
    "data": {
      "nao": -0.05,
      "amo": 0.012,
      "nino": 1.364,
      "pdo": -0.085,
      "iod": -0.1,
      "anino": 0.347,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 4,
    "data": {
      "nao": -0.024,
      "amo": 0.064,
      "nino": 1.143,
      "pdo": -0.194,
      "iod": -0.037,
      "anino": 0.519,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 5,
    "data": {
      "nao": -0.036,
      "amo": 0.054,
      "nino": 1.043,
      "pdo": -0.21,
      "iod": 0.35,
      "anino": 0.557,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 6,
    "data": {
      "nao": -0.009,
      "amo": 0.114,
      "nino": 1.239,
      "pdo": -0.383,
      "iod": -0.025,
      "anino": 0.719,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 7,
    "data": {
      "nao": 0.082,
      "amo": 0.184,
      "nino": 1.388,
      "pdo": -0.512,
      "iod": 0.115,
      "anino": 0.329,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 8,
    "data": {
      "nao": 0.096,
      "amo": 0.21,
      "nino": 1.373,
      "pdo": -0.392,
      "iod": 0.364,
      "anino": 0.431,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 9,
    "data": {
      "nao": 0.096,
      "amo": 0.176,
      "nino": 1.394,
      "pdo": -0.373,
      "iod": 0.435,
      "anino": 0.37,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 10,
    "data": {
      "nao": -0.184,
      "amo": -0.146,
      "nino": 1.036,
      "pdo": 0.136,
      "iod": 0.355,
      "anino": -0.23,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 11,
    "data": {
      "nao": -0.184,
      "amo": -0.185,
      "nino": 1.279,
      "pdo": 0.124,
      "iod": 0.306,
      "anino": -0.336,
      "ismr": -37.36
    }
  },
  {
    "year": 1987,
    "month": 12,
    "data": {
      "nao": -0.068,
      "amo": -0.116,
      "nino": 1.148,
      "pdo": 0.076,
      "iod": -0.071,
      "anino": -0.461,
      "ismr": -37.36
    }
  },
  {
    "year": 1988,
    "month": 1,
    "data": {
      "nao": 0.013,
      "amo": 0.074,
      "nino": 0.961,
      "pdo": -0.017,
      "iod": 0.324,
      "anino": 0.353,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 2,
    "data": {
      "nao": -0.028,
      "amo": 0.013,
      "nino": 0.545,
      "pdo": 0.053,
      "iod": 0.123,
      "anino": 0.115,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 3,
    "data": {
      "nao": -0.008,
      "amo": 0.036,
      "nino": 0.218,
      "pdo": 0.065,
      "iod": 0.034,
      "anino": 0.293,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 4,
    "data": {
      "nao": 0.018,
      "amo": 0.092,
      "nino": -0.206,
      "pdo": 0.015,
      "iod": 0.101,
      "anino": 0.426,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 5,
    "data": {
      "nao": 0.062,
      "amo": 0.128,
      "nino": -0.806,
      "pdo": -0.074,
      "iod": -0.256,
      "anino": 0.308,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 6,
    "data": {
      "nao": 0.1,
      "amo": 0.168,
      "nino": -1.106,
      "pdo": -0.019,
      "iod": -0.096,
      "anino": 0.475,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 7,
    "data": {
      "nao": 0.109,
      "amo": 0.144,
      "nino": -1.196,
      "pdo": -0.046,
      "iod": 0.101,
      "anino": 0.469,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 8,
    "data": {
      "nao": 0.061,
      "amo": 0.038,
      "nino": -1.118,
      "pdo": -0.073,
      "iod": 0.185,
      "anino": 0.192,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 9,
    "data": {
      "nao": 0.044,
      "amo": -0.003,
      "nino": -1.06,
      "pdo": -0.038,
      "iod": -0.012,
      "anino": 0.07,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 10,
    "data": {
      "nao": -0.038,
      "amo": 0.07,
      "nino": 1.354,
      "pdo": -0.278,
      "iod": 0.315,
      "anino": 0.417,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 11,
    "data": {
      "nao": -0.038,
      "amo": 0.056,
      "nino": 1.362,
      "pdo": -0.051,
      "iod": 0.002,
      "anino": 0.462,
      "ismr": 28.749
    }
  },
  {
    "year": 1988,
    "month": 12,
    "data": {
      "nao": -0.005,
      "amo": 0.104,
      "nino": 1.154,
      "pdo": -0.118,
      "iod": 0.011,
      "anino": 0.593,
      "ismr": 28.749
    }
  },
  {
    "year": 1989,
    "month": 1,
    "data": {
      "nao": -0.028,
      "amo": -0.014,
      "nino": -1.57,
      "pdo": 0.336,
      "iod": -0.212,
      "anino": -0.245,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 2,
    "data": {
      "nao": 0.039,
      "amo": 0.01,
      "nino": -1.257,
      "pdo": 0.224,
      "iod": -0.066,
      "anino": -0.369,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 3,
    "data": {
      "nao": 0.034,
      "amo": -0.031,
      "nino": -0.889,
      "pdo": 0.176,
      "iod": -0.115,
      "anino": -0.478,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 4,
    "data": {
      "nao": 0.03,
      "amo": -0.055,
      "nino": -0.794,
      "pdo": 0.232,
      "iod": -0.103,
      "anino": -0.564,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 5,
    "data": {
      "nao": 0.082,
      "amo": 0.03,
      "nino": -0.713,
      "pdo": 0.192,
      "iod": -0.209,
      "anino": -0.434,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 6,
    "data": {
      "nao": 0.141,
      "amo": 0.132,
      "nino": -0.584,
      "pdo": 0.143,
      "iod": -0.369,
      "anino": -0.143,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 7,
    "data": {
      "nao": 0.112,
      "amo": 0.183,
      "nino": -0.359,
      "pdo": 0.103,
      "iod": 0.078,
      "anino": 0.25,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 8,
    "data": {
      "nao": 0.079,
      "amo": 0.142,
      "nino": -0.312,
      "pdo": 0.229,
      "iod": -0.168,
      "anino": 0.346,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 9,
    "data": {
      "nao": -0.027,
      "amo": 0.032,
      "nino": -0.178,
      "pdo": 0.262,
      "iod": -0.128,
      "anino": 0.136,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 10,
    "data": {
      "nao": -0.037,
      "amo": -0.021,
      "nino": -1.411,
      "pdo": 0.16,
      "iod": -0.012,
      "anino": -0.145,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 11,
    "data": {
      "nao": -0.06,
      "amo": -0.019,
      "nino": -1.753,
      "pdo": 0.147,
      "iod": 0.062,
      "anino": -0.164,
      "ismr": 5.034
    }
  },
  {
    "year": 1989,
    "month": 12,
    "data": {
      "nao": -0.08,
      "amo": -0.044,
      "nino": -1.663,
      "pdo": 0.281,
      "iod": 0.364,
      "anino": -0.213,
      "ismr": 5.034
    }
  },
  {
    "year": 1990,
    "month": 1,
    "data": {
      "nao": 0.009,
      "amo": -0.024,
      "nino": 0.291,
      "pdo": 0.245,
      "iod": 0.387,
      "anino": -0.052,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 2,
    "data": {
      "nao": 0.077,
      "amo": 0.025,
      "nino": 0.434,
      "pdo": 0.18,
      "iod": 0.225,
      "anino": 0.031,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 3,
    "data": {
      "nao": 0.084,
      "amo": 0.042,
      "nino": 0.469,
      "pdo": 0.148,
      "iod": 0.039,
      "anino": 0.103,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 4,
    "data": {
      "nao": 0.089,
      "amo": 0.044,
      "nino": 0.511,
      "pdo": 0.13,
      "iod": 0.055,
      "anino": 0.203,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 5,
    "data": {
      "nao": 0.089,
      "amo": 0.059,
      "nino": 0.436,
      "pdo": 0.164,
      "iod": -0.135,
      "anino": 0.214,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 6,
    "data": {
      "nao": 0.065,
      "amo": 0.008,
      "nino": 0.276,
      "pdo": 0.197,
      "iod": -0.082,
      "anino": 0.107,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 7,
    "data": {
      "nao": 0.072,
      "amo": 0.003,
      "nino": 0.39,
      "pdo": 0.272,
      "iod": 0.091,
      "anino": 0.166,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 8,
    "data": {
      "nao": 0.121,
      "amo": 0.065,
      "nino": 0.446,
      "pdo": 0.167,
      "iod": -0.041,
      "anino": 0.278,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 9,
    "data": {
      "nao": 0.148,
      "amo": 0.104,
      "nino": 0.45,
      "pdo": 0.261,
      "iod": -0.157,
      "anino": 0.392,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 10,
    "data": {
      "nao": -0.062,
      "amo": -0.008,
      "nino": -0.128,
      "pdo": 0.236,
      "iod": -0.114,
      "anino": 0.033,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 11,
    "data": {
      "nao": 0.001,
      "amo": 0.003,
      "nino": -0.179,
      "pdo": 0.226,
      "iod": -0.105,
      "anino": -0.042,
      "ismr": 15.543
    }
  },
  {
    "year": 1990,
    "month": 12,
    "data": {
      "nao": -0.032,
      "amo": 0.0,
      "nino": 0.224,
      "pdo": 0.267,
      "iod": 0.092,
      "anino": 0.178,
      "ismr": 15.543
    }
  },
  {
    "year": 1991,
    "month": 1,
    "data": {
      "nao": 0.043,
      "amo": 0.024,
      "nino": 0.745,
      "pdo": 0.532,
      "iod": 0.174,
      "anino": -0.009,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 2,
    "data": {
      "nao": 0.052,
      "amo": 0.016,
      "nino": 0.651,
      "pdo": 0.304,
      "iod": 0.209,
      "anino": -0.025,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 3,
    "data": {
      "nao": 0.051,
      "amo": 0.012,
      "nino": 0.567,
      "pdo": 0.273,
      "iod": 0.134,
      "anino": -0.129,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 4,
    "data": {
      "nao": 0.035,
      "amo": -0.01,
      "nino": 0.596,
      "pdo": 0.424,
      "iod": 0.605,
      "anino": -0.127,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 5,
    "data": {
      "nao": -0.005,
      "amo": -0.053,
      "nino": 0.772,
      "pdo": 0.344,
      "iod": 0.515,
      "anino": -0.175,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 6,
    "data": {
      "nao": -0.035,
      "amo": -0.08,
      "nino": 0.91,
      "pdo": 0.462,
      "iod": 0.038,
      "anino": -0.213,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 7,
    "data": {
      "nao": 0.089,
      "amo": -0.026,
      "nino": 1.025,
      "pdo": 0.355,
      "iod": 0.05,
      "anino": -0.222,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 8,
    "data": {
      "nao": 0.13,
      "amo": 0.022,
      "nino": 0.952,
      "pdo": 0.074,
      "iod": 0.009,
      "anino": -0.129,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 9,
    "data": {
      "nao": 0.054,
      "amo": 0.044,
      "nino": 0.747,
      "pdo": 0.008,
      "iod": 0.343,
      "anino": -0.101,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 10,
    "data": {
      "nao": 0.077,
      "amo": 0.111,
      "nino": 0.463,
      "pdo": 0.376,
      "iod": -0.23,
      "anino": 0.393,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 11,
    "data": {
      "nao": 0.057,
      "amo": 0.073,
      "nino": 0.522,
      "pdo": 0.485,
      "iod": -0.132,
      "anino": 0.253,
      "ismr": -7.573
    }
  },
  {
    "year": 1991,
    "month": 12,
    "data": {
      "nao": 0.051,
      "amo": 0.059,
      "nino": 0.647,
      "pdo": 0.498,
      "iod": 0.128,
      "anino": 0.118,
      "ismr": -7.573
    }
  },
  {
    "year": 1992,
    "month": 1,
    "data": {
      "nao": 0.03,
      "amo": 0.035,
      "nino": 1.742,
      "pdo": 0.083,
      "iod": -0.231,
      "anino": 0.1,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 2,
    "data": {
      "nao": 0.035,
      "amo": 0.051,
      "nino": 1.57,
      "pdo": 0.034,
      "iod": -0.267,
      "anino": 0.096,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 3,
    "data": {
      "nao": 0.057,
      "amo": 0.022,
      "nino": 1.444,
      "pdo": 0.096,
      "iod": -0.365,
      "anino": -0.013,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 4,
    "data": {
      "nao": 0.007,
      "amo": -0.012,
      "nino": 1.276,
      "pdo": 0.049,
      "iod": -0.387,
      "anino": 0.06,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 5,
    "data": {
      "nao": -0.023,
      "amo": -0.058,
      "nino": 1.105,
      "pdo": -0.052,
      "iod": -0.17,
      "anino": 0.026,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 6,
    "data": {
      "nao": -0.001,
      "amo": -0.05,
      "nino": 0.854,
      "pdo": 0.054,
      "iod": -0.318,
      "anino": 0.078,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 7,
    "data": {
      "nao": -0.138,
      "amo": -0.13,
      "nino": 0.683,
      "pdo": -0.141,
      "iod": -0.109,
      "anino": 0.082,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 8,
    "data": {
      "nao": -0.182,
      "amo": -0.17,
      "nino": 0.24,
      "pdo": -0.235,
      "iod": -0.262,
      "anino": -0.062,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 9,
    "data": {
      "nao": -0.174,
      "amo": -0.166,
      "nino": 0.241,
      "pdo": -0.144,
      "iod": -0.339,
      "anino": -0.12,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 10,
    "data": {
      "nao": -0.016,
      "amo": -0.042,
      "nino": 1.144,
      "pdo": 0.195,
      "iod": 0.263,
      "anino": -0.128,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 11,
    "data": {
      "nao": -0.027,
      "amo": -0.045,
      "nino": 1.348,
      "pdo": 0.378,
      "iod": 0.206,
      "anino": -0.151,
      "ismr": -7.888
    }
  },
  {
    "year": 1992,
    "month": 12,
    "data": {
      "nao": -0.008,
      "amo": -0.022,
      "nino": 1.703,
      "pdo": 0.225,
      "iod": 0.155,
      "anino": -0.172,
      "ismr": -7.888
    }
  },
  {
    "year": 1993,
    "month": 1,
    "data": {
      "nao": -0.003,
      "amo": -0.027,
      "nino": 0.427,
      "pdo": 0.028,
      "iod": 0.152,
      "anino": -0.039,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 2,
    "data": {
      "nao": -0.001,
      "amo": -0.012,
      "nino": 0.519,
      "pdo": 0.006,
      "iod": 0.298,
      "anino": -0.001,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 3,
    "data": {
      "nao": -0.064,
      "amo": -0.069,
      "nino": 0.661,
      "pdo": 0.01,
      "iod": 0.032,
      "anino": 0.005,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 4,
    "data": {
      "nao": -0.04,
      "amo": -0.007,
      "nino": 0.825,
      "pdo": 0.012,
      "iod": -0.085,
      "anino": 0.116,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 5,
    "data": {
      "nao": -0.062,
      "amo": -0.009,
      "nino": 0.906,
      "pdo": -0.076,
      "iod": 0.293,
      "anino": 0.16,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 6,
    "data": {
      "nao": -0.091,
      "amo": -0.032,
      "nino": 0.799,
      "pdo": -0.03,
      "iod": 0.236,
      "anino": 0.191,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 7,
    "data": {
      "nao": -0.13,
      "amo": -0.096,
      "nino": 0.675,
      "pdo": -0.08,
      "iod": 0.059,
      "anino": 0.095,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 8,
    "data": {
      "nao": -0.018,
      "amo": -0.023,
      "nino": 0.479,
      "pdo": -0.211,
      "iod": -0.119,
      "anino": -0.056,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 9,
    "data": {
      "nao": -0.003,
      "amo": -0.02,
      "nino": 0.586,
      "pdo": -0.055,
      "iod": -0.197,
      "anino": -0.108,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 10,
    "data": {
      "nao": -0.126,
      "amo": -0.136,
      "nino": 0.159,
      "pdo": -0.108,
      "iod": -0.209,
      "anino": -0.096,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 11,
    "data": {
      "nao": -0.108,
      "amo": -0.097,
      "nino": 0.416,
      "pdo": -0.087,
      "iod": 0.311,
      "anino": -0.109,
      "ismr": -0.079
    }
  },
  {
    "year": 1993,
    "month": 12,
    "data": {
      "nao": -0.059,
      "amo": -0.062,
      "nino": 0.436,
      "pdo": -0.082,
      "iod": 0.284,
      "anino": -0.033,
      "ismr": -0.079
    }
  },
  {
    "year": 1994,
    "month": 1,
    "data": {
      "nao": -0.06,
      "amo": -0.064,
      "nino": 0.465,
      "pdo": 0.087,
      "iod": 0.213,
      "anino": -0.323,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 2,
    "data": {
      "nao": -0.07,
      "amo": -0.089,
      "nino": 0.207,
      "pdo": 0.207,
      "iod": -0.238,
      "anino": -0.384,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 3,
    "data": {
      "nao": -0.04,
      "amo": -0.052,
      "nino": 0.239,
      "pdo": 0.198,
      "iod": 0.16,
      "anino": -0.295,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 4,
    "data": {
      "nao": 0.017,
      "amo": -0.007,
      "nino": 0.313,
      "pdo": 0.096,
      "iod": 0.346,
      "anino": -0.226,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 5,
    "data": {
      "nao": 0.015,
      "amo": -0.035,
      "nino": 0.428,
      "pdo": 0.082,
      "iod": 0.485,
      "anino": -0.33,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 6,
    "data": {
      "nao": -0.024,
      "amo": -0.06,
      "nino": 0.552,
      "pdo": 0.193,
      "iod": 0.208,
      "anino": -0.252,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 7,
    "data": {
      "nao": 0.03,
      "amo": -0.048,
      "nino": 0.596,
      "pdo": 0.218,
      "iod": 0.554,
      "anino": -0.282,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 8,
    "data": {
      "nao": 0.042,
      "amo": -0.021,
      "nino": 0.821,
      "pdo": 0.451,
      "iod": 0.735,
      "anino": -0.168,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 9,
    "data": {
      "nao": 0.032,
      "amo": 0.007,
      "nino": 0.823,
      "pdo": 0.461,
      "iod": 0.713,
      "anino": -0.246,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 10,
    "data": {
      "nao": -0.115,
      "amo": -0.062,
      "nino": 0.659,
      "pdo": 0.083,
      "iod": -0.11,
      "anino": -0.124,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 11,
    "data": {
      "nao": -0.107,
      "amo": -0.068,
      "nino": 0.655,
      "pdo": 0.138,
      "iod": -0.032,
      "anino": -0.23,
      "ismr": 27.806
    }
  },
  {
    "year": 1994,
    "month": 12,
    "data": {
      "nao": -0.081,
      "amo": -0.072,
      "nino": 0.656,
      "pdo": 0.075,
      "iod": 0.058,
      "anino": -0.241,
      "ismr": 27.806
    }
  },
  {
    "year": 1995,
    "month": 1,
    "data": {
      "nao": 0.069,
      "amo": 0.104,
      "nino": 1.203,
      "pdo": 0.164,
      "iod": -0.002,
      "anino": 0.086,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 2,
    "data": {
      "nao": 0.085,
      "amo": 0.12,
      "nino": 0.959,
      "pdo": 0.055,
      "iod": 0.393,
      "anino": 0.091,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 3,
    "data": {
      "nao": 0.089,
      "amo": 0.109,
      "nino": 0.585,
      "pdo": 0.06,
      "iod": 0.175,
      "anino": 0.1,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 4,
    "data": {
      "nao": 0.082,
      "amo": 0.128,
      "nino": 0.337,
      "pdo": -0.023,
      "iod": -0.174,
      "anino": 0.278,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 5,
    "data": {
      "nao": 0.175,
      "amo": 0.221,
      "nino": 0.207,
      "pdo": -0.101,
      "iod": -0.14,
      "anino": 0.525,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 6,
    "data": {
      "nao": 0.225,
      "amo": 0.269,
      "nino": 0.219,
      "pdo": -0.158,
      "iod": -0.008,
      "anino": 0.493,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 7,
    "data": {
      "nao": 0.195,
      "amo": 0.296,
      "nino": 0.1,
      "pdo": 0.008,
      "iod": -0.302,
      "anino": 0.718,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 8,
    "data": {
      "nao": 0.142,
      "amo": 0.233,
      "nino": -0.204,
      "pdo": 0.177,
      "iod": -0.499,
      "anino": 0.632,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 9,
    "data": {
      "nao": 0.067,
      "amo": 0.122,
      "nino": -0.382,
      "pdo": 0.091,
      "iod": -0.083,
      "anino": 0.473,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 10,
    "data": {
      "nao": 0.066,
      "amo": 0.079,
      "nino": 1.158,
      "pdo": 0.387,
      "iod": 0.909,
      "anino": -0.247,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 11,
    "data": {
      "nao": 0.068,
      "amo": 0.104,
      "nino": 1.308,
      "pdo": 0.329,
      "iod": 0.217,
      "anino": -0.109,
      "ismr": -6.66
    }
  },
  {
    "year": 1995,
    "month": 12,
    "data": {
      "nao": 0.071,
      "amo": 0.079,
      "nino": 1.33,
      "pdo": 0.375,
      "iod": -0.062,
      "anino": -0.174,
      "ismr": -6.66
    }
  },
  {
    "year": 1996,
    "month": 1,
    "data": {
      "nao": 0.041,
      "amo": 0.126,
      "nino": -0.523,
      "pdo": 0.322,
      "iod": 0.575,
      "anino": 0.775,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 2,
    "data": {
      "nao": 0.027,
      "amo": 0.092,
      "nino": -0.589,
      "pdo": 0.281,
      "iod": 0.466,
      "anino": 0.618,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 3,
    "data": {
      "nao": 0.011,
      "amo": 0.045,
      "nino": -0.327,
      "pdo": 0.203,
      "iod": 0.138,
      "anino": 0.394,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 4,
    "data": {
      "nao": 0.065,
      "amo": 0.11,
      "nino": -0.231,
      "pdo": 0.258,
      "iod": -0.086,
      "anino": 0.359,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 5,
    "data": {
      "nao": 0.007,
      "amo": 0.072,
      "nino": -0.112,
      "pdo": 0.309,
      "iod": -0.014,
      "anino": 0.309,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 6,
    "data": {
      "nao": -0.012,
      "amo": 0.046,
      "nino": -0.084,
      "pdo": 0.433,
      "iod": -0.268,
      "anino": 0.327,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 7,
    "data": {
      "nao": -0.013,
      "amo": 0.025,
      "nino": -0.081,
      "pdo": 0.313,
      "iod": -0.321,
      "anino": 0.291,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 8,
    "data": {
      "nao": 0.129,
      "amo": 0.147,
      "nino": -0.03,
      "pdo": 0.428,
      "iod": -0.445,
      "anino": 0.28,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 9,
    "data": {
      "nao": 0.09,
      "amo": 0.123,
      "nino": -0.222,
      "pdo": 0.358,
      "iod": -0.259,
      "anino": 0.269,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 10,
    "data": {
      "nao": 0.09,
      "amo": 0.164,
      "nino": -0.579,
      "pdo": 0.173,
      "iod": 0.029,
      "anino": 0.45,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 11,
    "data": {
      "nao": 0.061,
      "amo": 0.179,
      "nino": -0.902,
      "pdo": 0.346,
      "iod": -0.109,
      "anino": 0.593,
      "ismr": 1.199
    }
  },
  {
    "year": 1996,
    "month": 12,
    "data": {
      "nao": 0.054,
      "amo": 0.15,
      "nino": -0.798,
      "pdo": 0.412,
      "iod": 0.199,
      "anino": 0.611,
      "ismr": 1.199
    }
  },
  {
    "year": 1997,
    "month": 1,
    "data": {
      "nao": 0.082,
      "amo": 0.156,
      "nino": -0.136,
      "pdo": 0.169,
      "iod": 0.11,
      "anino": 0.415,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 2,
    "data": {
      "nao": 0.108,
      "amo": 0.199,
      "nino": -0.001,
      "pdo": 0.278,
      "iod": 0.004,
      "anino": 0.419,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 3,
    "data": {
      "nao": 0.126,
      "amo": 0.175,
      "nino": 0.241,
      "pdo": 0.265,
      "iod": 0.163,
      "anino": 0.238,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 4,
    "data": {
      "nao": 0.094,
      "amo": 0.143,
      "nino": 0.636,
      "pdo": 0.271,
      "iod": 0.129,
      "anino": 0.393,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 5,
    "data": {
      "nao": 0.088,
      "amo": 0.177,
      "nino": 0.972,
      "pdo": 0.21,
      "iod": 0.072,
      "anino": 0.411,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 6,
    "data": {
      "nao": 0.113,
      "amo": 0.189,
      "nino": 1.209,
      "pdo": 0.286,
      "iod": 0.37,
      "anino": 0.563,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 7,
    "data": {
      "nao": 0.195,
      "amo": 0.208,
      "nino": 1.514,
      "pdo": 0.328,
      "iod": 0.559,
      "anino": 0.5,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 8,
    "data": {
      "nao": 0.193,
      "amo": 0.221,
      "nino": 1.738,
      "pdo": 0.32,
      "iod": 0.492,
      "anino": 0.318,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 9,
    "data": {
      "nao": 0.203,
      "amo": 0.265,
      "nino": 1.906,
      "pdo": 0.266,
      "iod": 0.691,
      "anino": 0.413,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 10,
    "data": {
      "nao": -0.014,
      "amo": 0.03,
      "nino": -0.186,
      "pdo": 0.287,
      "iod": -0.536,
      "anino": 0.161,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 11,
    "data": {
      "nao": 0.032,
      "amo": 0.06,
      "nino": -0.219,
      "pdo": 0.172,
      "iod": -0.422,
      "anino": -0.018,
      "ismr": 2.084
    }
  },
  {
    "year": 1997,
    "month": 12,
    "data": {
      "nao": 0.037,
      "amo": 0.075,
      "nino": -0.339,
      "pdo": 0.237,
      "iod": -0.103,
      "anino": 0.088,
      "ismr": 2.084
    }
  },
  {
    "year": 1998,
    "month": 1,
    "data": {
      "nao": 0.201,
      "amo": 0.285,
      "nino": 2.214,
      "pdo": 0.1,
      "iod": 0.717,
      "anino": 0.526,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 2,
    "data": {
      "nao": 0.18,
      "amo": 0.352,
      "nino": 1.749,
      "pdo": 0.059,
      "iod": 0.57,
      "anino": 0.87,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 3,
    "data": {
      "nao": 0.189,
      "amo": 0.357,
      "nino": 1.393,
      "pdo": 0.126,
      "iod": 0.161,
      "anino": 0.843,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 4,
    "data": {
      "nao": 0.177,
      "amo": 0.311,
      "nino": 0.876,
      "pdo": 0.196,
      "iod": 0.211,
      "anino": 0.758,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 5,
    "data": {
      "nao": 0.226,
      "amo": 0.348,
      "nino": 0.605,
      "pdo": 0.214,
      "iod": 0.277,
      "anino": 0.855,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 6,
    "data": {
      "nao": 0.342,
      "amo": 0.415,
      "nino": -0.246,
      "pdo": 0.263,
      "iod": 0.178,
      "anino": 0.825,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 7,
    "data": {
      "nao": 0.386,
      "amo": 0.387,
      "nino": -0.661,
      "pdo": 0.336,
      "iod": -0.234,
      "anino": 0.775,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 8,
    "data": {
      "nao": 0.436,
      "amo": 0.428,
      "nino": -0.871,
      "pdo": 0.281,
      "iod": -0.296,
      "anino": 0.832,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 9,
    "data": {
      "nao": 0.324,
      "amo": 0.34,
      "nino": -0.759,
      "pdo": 0.16,
      "iod": -0.086,
      "anino": 0.696,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 10,
    "data": {
      "nao": 0.208,
      "amo": 0.303,
      "nino": 2.062,
      "pdo": 0.175,
      "iod": 0.953,
      "anino": 0.536,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 11,
    "data": {
      "nao": 0.129,
      "amo": 0.23,
      "nino": 2.162,
      "pdo": 0.273,
      "iod": 1.091,
      "anino": 0.462,
      "ismr": 3.268
    }
  },
  {
    "year": 1998,
    "month": 12,
    "data": {
      "nao": 0.151,
      "amo": 0.238,
      "nino": 2.182,
      "pdo": 0.149,
      "iod": 0.901,
      "anino": 0.452,
      "ismr": 3.268
    }
  },
  {
    "year": 1999,
    "month": 1,
    "data": {
      "nao": 0.226,
      "amo": 0.192,
      "nino": -1.352,
      "pdo": 0.386,
      "iod": -0.182,
      "anino": -0.042,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 2,
    "data": {
      "nao": 0.229,
      "amo": 0.196,
      "nino": -1.18,
      "pdo": 0.375,
      "iod": 0.029,
      "anino": -0.039,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 3,
    "data": {
      "nao": 0.234,
      "amo": 0.19,
      "nino": -0.798,
      "pdo": 0.319,
      "iod": 0.04,
      "anino": -0.043,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 4,
    "data": {
      "nao": 0.264,
      "amo": 0.222,
      "nino": -0.684,
      "pdo": 0.266,
      "iod": 0.012,
      "anino": 0.028,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 5,
    "data": {
      "nao": 0.33,
      "amo": 0.319,
      "nino": -0.558,
      "pdo": 0.262,
      "iod": -0.268,
      "anino": 0.26,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 6,
    "data": {
      "nao": 0.338,
      "amo": 0.314,
      "nino": -0.598,
      "pdo": 0.182,
      "iod": -0.068,
      "anino": 0.308,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 7,
    "data": {
      "nao": 0.371,
      "amo": 0.307,
      "nino": -0.639,
      "pdo": 0.007,
      "iod": 0.207,
      "anino": 0.283,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 8,
    "data": {
      "nao": 0.41,
      "amo": 0.387,
      "nino": -0.869,
      "pdo": 0.05,
      "iod": 0.05,
      "anino": 0.467,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 9,
    "data": {
      "nao": 0.316,
      "amo": 0.328,
      "nino": -0.792,
      "pdo": 0.164,
      "iod": 0.028,
      "anino": 0.516,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 10,
    "data": {
      "nao": 0.284,
      "amo": 0.329,
      "nino": -1.137,
      "pdo": 0.334,
      "iod": -0.248,
      "anino": 0.547,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 11,
    "data": {
      "nao": 0.295,
      "amo": 0.331,
      "nino": -1.158,
      "pdo": 0.388,
      "iod": -0.117,
      "anino": 0.425,
      "ismr": -9.573
    }
  },
  {
    "year": 1999,
    "month": 12,
    "data": {
      "nao": 0.276,
      "amo": 0.285,
      "nino": -1.338,
      "pdo": 0.296,
      "iod": -0.092,
      "anino": 0.26,
      "ismr": -9.573
    }
  },
  {
    "year": 2000,
    "month": 1,
    "data": {
      "nao": 0.148,
      "amo": 0.131,
      "nino": -1.327,
      "pdo": 0.377,
      "iod": 0.164,
      "anino": 0.034,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 2,
    "data": {
      "nao": 0.147,
      "amo": 0.158,
      "nino": -1.341,
      "pdo": 0.265,
      "iod": 0.309,
      "anino": 0.005,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 3,
    "data": {
      "nao": 0.199,
      "amo": 0.211,
      "nino": -0.852,
      "pdo": 0.194,
      "iod": 0.213,
      "anino": 0.079,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 4,
    "data": {
      "nao": 0.186,
      "amo": 0.19,
      "nino": -0.58,
      "pdo": 0.17,
      "iod": 0.223,
      "anino": -0.088,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 5,
    "data": {
      "nao": 0.265,
      "amo": 0.265,
      "nino": -0.507,
      "pdo": 0.345,
      "iod": 0.102,
      "anino": -0.021,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 6,
    "data": {
      "nao": 0.178,
      "amo": 0.152,
      "nino": -0.404,
      "pdo": 0.366,
      "iod": -0.011,
      "anino": -0.014,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 7,
    "data": {
      "nao": 0.227,
      "amo": 0.171,
      "nino": -0.262,
      "pdo": 0.42,
      "iod": 0.268,
      "anino": 0.126,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 8,
    "data": {
      "nao": 0.245,
      "amo": 0.205,
      "nino": -0.163,
      "pdo": 0.534,
      "iod": 0.364,
      "anino": 0.233,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 9,
    "data": {
      "nao": 0.251,
      "amo": 0.22,
      "nino": -0.227,
      "pdo": 0.559,
      "iod": 0.225,
      "anino": 0.181,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 10,
    "data": {
      "nao": 0.235,
      "amo": 0.212,
      "nino": -0.891,
      "pdo": 0.34,
      "iod": -0.321,
      "anino": 0.325,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 11,
    "data": {
      "nao": 0.209,
      "amo": 0.179,
      "nino": -1.246,
      "pdo": 0.31,
      "iod": -0.167,
      "anino": 0.288,
      "ismr": -15.063
    }
  },
  {
    "year": 2000,
    "month": 12,
    "data": {
      "nao": 0.195,
      "amo": 0.207,
      "nino": -1.335,
      "pdo": 0.288,
      "iod": 0.169,
      "anino": 0.347,
      "ismr": -15.063
    }
  },
  {
    "year": 2001,
    "month": 1,
    "data": {
      "nao": 0.199,
      "amo": 0.164,
      "nino": -0.418,
      "pdo": 0.239,
      "iod": 0.191,
      "anino": 0.022,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 2,
    "data": {
      "nao": 0.218,
      "amo": 0.187,
      "nino": -0.532,
      "pdo": 0.247,
      "iod": 0.298,
      "anino": -0.042,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 3,
    "data": {
      "nao": 0.197,
      "amo": 0.206,
      "nino": -0.249,
      "pdo": 0.239,
      "iod": 0.357,
      "anino": 0.098,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 4,
    "data": {
      "nao": 0.182,
      "amo": 0.18,
      "nino": -0.02,
      "pdo": 0.252,
      "iod": 0.11,
      "anino": 0.023,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 5,
    "data": {
      "nao": 0.197,
      "amo": 0.169,
      "nino": 0.083,
      "pdo": 0.28,
      "iod": 0.205,
      "anino": 0.037,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 6,
    "data": {
      "nao": 0.336,
      "amo": 0.28,
      "nino": 0.32,
      "pdo": 0.333,
      "iod": 0.073,
      "anino": 0.189,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 7,
    "data": {
      "nao": 0.352,
      "amo": 0.257,
      "nino": 0.475,
      "pdo": 0.433,
      "iod": -0.074,
      "anino": 0.288,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 8,
    "data": {
      "nao": 0.407,
      "amo": 0.334,
      "nino": 0.424,
      "pdo": 0.192,
      "iod": -0.047,
      "anino": 0.383,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 9,
    "data": {
      "nao": 0.465,
      "amo": 0.346,
      "nino": 0.373,
      "pdo": 0.146,
      "iod": -0.011,
      "anino": 0.477,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 10,
    "data": {
      "nao": 0.19,
      "amo": 0.129,
      "nino": -0.304,
      "pdo": 0.469,
      "iod": 0.136,
      "anino": 0.151,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 11,
    "data": {
      "nao": 0.254,
      "amo": 0.188,
      "nino": -0.505,
      "pdo": 0.355,
      "iod": 0.179,
      "anino": 0.081,
      "ismr": -12.879
    }
  },
  {
    "year": 2001,
    "month": 12,
    "data": {
      "nao": 0.224,
      "amo": 0.154,
      "nino": -0.547,
      "pdo": 0.287,
      "iod": 0.15,
      "anino": -0.122,
      "ismr": -12.879
    }
  },
  {
    "year": 2002,
    "month": 1,
    "data": {
      "nao": 0.255,
      "amo": 0.325,
      "nino": 0.489,
      "pdo": 0.122,
      "iod": 0.148,
      "anino": 0.854,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 2,
    "data": {
      "nao": 0.24,
      "amo": 0.305,
      "nino": 0.474,
      "pdo": 0.202,
      "iod": 0.046,
      "anino": 0.619,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 3,
    "data": {
      "nao": 0.216,
      "amo": 0.28,
      "nino": 0.489,
      "pdo": 0.192,
      "iod": 0.108,
      "anino": 0.546,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 4,
    "data": {
      "nao": 0.25,
      "amo": 0.221,
      "nino": 0.585,
      "pdo": 0.267,
      "iod": -0.062,
      "anino": 0.313,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 5,
    "data": {
      "nao": 0.24,
      "amo": 0.173,
      "nino": 0.802,
      "pdo": 0.477,
      "iod": -0.187,
      "anino": 0.084,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 6,
    "data": {
      "nao": 0.277,
      "amo": 0.113,
      "nino": 1.066,
      "pdo": 0.538,
      "iod": -0.128,
      "anino": 0.082,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 7,
    "data": {
      "nao": 0.278,
      "amo": 0.091,
      "nino": 1.043,
      "pdo": 0.297,
      "iod": -0.309,
      "anino": 0.021,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 8,
    "data": {
      "nao": 0.38,
      "amo": 0.242,
      "nino": 1.1,
      "pdo": 0.203,
      "iod": -0.18,
      "anino": 0.165,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 9,
    "data": {
      "nao": 0.334,
      "amo": 0.243,
      "nino": 1.308,
      "pdo": 0.226,
      "iod": 0.523,
      "anino": 0.201,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 10,
    "data": {
      "nao": 0.422,
      "amo": 0.333,
      "nino": 0.227,
      "pdo": 0.197,
      "iod": -0.118,
      "anino": 0.406,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 11,
    "data": {
      "nao": 0.267,
      "amo": 0.292,
      "nino": 0.046,
      "pdo": 0.212,
      "iod": 0.139,
      "anino": 0.616,
      "ismr": -49.795
    }
  },
  {
    "year": 2002,
    "month": 12,
    "data": {
      "nao": 0.243,
      "amo": 0.289,
      "nino": 0.009,
      "pdo": 0.204,
      "iod": 0.166,
      "anino": 0.745,
      "ismr": -49.795
    }
  },
  {
    "year": 2003,
    "month": 1,
    "data": {
      "nao": 0.227,
      "amo": 0.243,
      "nino": 1.259,
      "pdo": 0.057,
      "iod": -0.255,
      "anino": 0.348,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 2,
    "data": {
      "nao": 0.209,
      "amo": 0.191,
      "nino": 0.989,
      "pdo": 0.138,
      "iod": 0.202,
      "anino": 0.264,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 3,
    "data": {
      "nao": 0.256,
      "amo": 0.231,
      "nino": 0.934,
      "pdo": 0.177,
      "iod": 0.209,
      "anino": 0.174,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 4,
    "data": {
      "nao": 0.227,
      "amo": 0.185,
      "nino": 0.42,
      "pdo": 0.222,
      "iod": 0.242,
      "anino": 0.263,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 5,
    "data": {
      "nao": 0.305,
      "amo": 0.266,
      "nino": 0.035,
      "pdo": 0.279,
      "iod": 0.379,
      "anino": 0.177,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 6,
    "data": {
      "nao": 0.377,
      "amo": 0.272,
      "nino": 0.356,
      "pdo": 0.339,
      "iod": 0.47,
      "anino": 0.164,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 7,
    "data": {
      "nao": 0.495,
      "amo": 0.334,
      "nino": 0.501,
      "pdo": 0.293,
      "iod": 0.341,
      "anino": 0.306,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 8,
    "data": {
      "nao": 0.566,
      "amo": 0.423,
      "nino": 0.399,
      "pdo": 0.35,
      "iod": 0.222,
      "anino": 0.629,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 9,
    "data": {
      "nao": 0.486,
      "amo": 0.425,
      "nino": 0.554,
      "pdo": 0.548,
      "iod": 0.203,
      "anino": 0.693,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 10,
    "data": {
      "nao": 0.285,
      "amo": 0.238,
      "nino": 1.447,
      "pdo": 0.317,
      "iod": 0.215,
      "anino": 0.322,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 11,
    "data": {
      "nao": 0.231,
      "amo": 0.208,
      "nino": 1.666,
      "pdo": 0.244,
      "iod": -0.078,
      "anino": 0.187,
      "ismr": 2.54
    }
  },
  {
    "year": 2003,
    "month": 12,
    "data": {
      "nao": 0.232,
      "amo": 0.209,
      "nino": 1.558,
      "pdo": 0.161,
      "iod": -0.22,
      "anino": 0.201,
      "ismr": 2.54
    }
  },
  {
    "year": 2004,
    "month": 1,
    "data": {
      "nao": 0.286,
      "amo": 0.329,
      "nino": 0.678,
      "pdo": 0.348,
      "iod": 0.052,
      "anino": 0.668,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 2,
    "data": {
      "nao": 0.269,
      "amo": 0.3,
      "nino": 0.501,
      "pdo": 0.338,
      "iod": 0.076,
      "anino": 0.631,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 3,
    "data": {
      "nao": 0.266,
      "amo": 0.259,
      "nino": 0.262,
      "pdo": 0.304,
      "iod": 0.186,
      "anino": 0.476,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 4,
    "data": {
      "nao": 0.279,
      "amo": 0.243,
      "nino": 0.341,
      "pdo": 0.362,
      "iod": -0.006,
      "anino": 0.62,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 5,
    "data": {
      "nao": 0.248,
      "amo": 0.163,
      "nino": 0.502,
      "pdo": 0.479,
      "iod": -0.309,
      "anino": 0.339,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 6,
    "data": {
      "nao": 0.324,
      "amo": 0.224,
      "nino": 0.596,
      "pdo": 0.571,
      "iod": -0.343,
      "anino": 0.367,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 7,
    "data": {
      "nao": 0.384,
      "amo": 0.263,
      "nino": 0.857,
      "pdo": 0.676,
      "iod": -0.156,
      "anino": 0.501,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 8,
    "data": {
      "nao": 0.444,
      "amo": 0.337,
      "nino": 0.925,
      "pdo": 0.622,
      "iod": 0.064,
      "anino": 0.714,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 9,
    "data": {
      "nao": 0.31,
      "amo": 0.273,
      "nino": 1.04,
      "pdo": 0.57,
      "iod": 0.331,
      "anino": 0.675,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 10,
    "data": {
      "nao": 0.392,
      "amo": 0.447,
      "nino": 0.781,
      "pdo": 0.473,
      "iod": -0.012,
      "anino": 0.845,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 11,
    "data": {
      "nao": 0.317,
      "amo": 0.338,
      "nino": 0.68,
      "pdo": 0.471,
      "iod": -0.013,
      "anino": 0.663,
      "ismr": -26.051
    }
  },
  {
    "year": 2004,
    "month": 12,
    "data": {
      "nao": 0.314,
      "amo": 0.339,
      "nino": 0.676,
      "pdo": 0.335,
      "iod": 0.143,
      "anino": 0.677,
      "ismr": -26.051
    }
  },
  {
    "year": 2005,
    "month": 1,
    "data": {
      "nao": 0.277,
      "amo": 0.314,
      "nino": 0.979,
      "pdo": 0.41,
      "iod": 0.069,
      "anino": 0.733,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 2,
    "data": {
      "nao": 0.243,
      "amo": 0.259,
      "nino": 0.562,
      "pdo": 0.439,
      "iod": -0.43,
      "anino": 0.701,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 3,
    "data": {
      "nao": 0.248,
      "amo": 0.311,
      "nino": 0.697,
      "pdo": 0.338,
      "iod": -0.329,
      "anino": 1.033,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 4,
    "data": {
      "nao": 0.322,
      "amo": 0.372,
      "nino": 0.577,
      "pdo": 0.331,
      "iod": 0.064,
      "anino": 1.077,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 5,
    "data": {
      "nao": 0.285,
      "amo": 0.362,
      "nino": 0.686,
      "pdo": 0.507,
      "iod": 0.227,
      "anino": 1.288,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 6,
    "data": {
      "nao": 0.366,
      "amo": 0.391,
      "nino": 0.674,
      "pdo": 0.561,
      "iod": 0.005,
      "anino": 1.319,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 7,
    "data": {
      "nao": 0.517,
      "amo": 0.464,
      "nino": 0.448,
      "pdo": 0.609,
      "iod": -0.241,
      "anino": 1.186,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 8,
    "data": {
      "nao": 0.497,
      "amo": 0.472,
      "nino": 0.235,
      "pdo": 0.708,
      "iod": -0.137,
      "anino": 1.118,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 9,
    "data": {
      "nao": 0.422,
      "amo": 0.462,
      "nino": 0.329,
      "pdo": 0.71,
      "iod": -0.264,
      "anino": 1.043,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 10,
    "data": {
      "nao": 0.309,
      "amo": 0.296,
      "nino": 1.089,
      "pdo": 0.572,
      "iod": 0.293,
      "anino": 0.689,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 11,
    "data": {
      "nao": 0.299,
      "amo": 0.335,
      "nino": 1.09,
      "pdo": 0.513,
      "iod": 0.071,
      "anino": 0.692,
      "ismr": -4.342
    }
  },
  {
    "year": 2005,
    "month": 12,
    "data": {
      "nao": 0.301,
      "amo": 0.336,
      "nino": 1.137,
      "pdo": 0.413,
      "iod": 0.123,
      "anino": 0.713,
      "ismr": -4.342
    }
  },
  {
    "year": 2006,
    "month": 1,
    "data": {
      "nao": 0.307,
      "amo": 0.317,
      "nino": -0.62,
      "pdo": 0.385,
      "iod": 0.141,
      "anino": 0.663,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 2,
    "data": {
      "nao": 0.254,
      "amo": 0.255,
      "nino": -0.584,
      "pdo": 0.265,
      "iod": -0.083,
      "anino": 0.444,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 3,
    "data": {
      "nao": 0.212,
      "amo": 0.213,
      "nino": -0.339,
      "pdo": 0.283,
      "iod": 0.008,
      "anino": 0.418,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 4,
    "data": {
      "nao": 0.308,
      "amo": 0.322,
      "nino": 0.012,
      "pdo": 0.236,
      "iod": 0.186,
      "anino": 0.632,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 5,
    "data": {
      "nao": 0.38,
      "amo": 0.383,
      "nino": 0.247,
      "pdo": 0.133,
      "iod": 0.186,
      "anino": 0.727,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 6,
    "data": {
      "nao": 0.383,
      "amo": 0.383,
      "nino": 0.413,
      "pdo": 0.161,
      "iod": 0.064,
      "anino": 0.717,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 7,
    "data": {
      "nao": 0.509,
      "amo": 0.46,
      "nino": 0.493,
      "pdo": 0.18,
      "iod": -0.026,
      "anino": 0.603,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 8,
    "data": {
      "nao": 0.533,
      "amo": 0.481,
      "nino": 0.734,
      "pdo": 0.363,
      "iod": 0.219,
      "anino": 0.65,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 9,
    "data": {
      "nao": 0.489,
      "amo": 0.438,
      "nino": 0.985,
      "pdo": 0.481,
      "iod": 0.264,
      "anino": 0.83,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 10,
    "data": {
      "nao": 0.31,
      "amo": 0.371,
      "nino": 0.305,
      "pdo": 0.711,
      "iod": -0.197,
      "anino": 0.8,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 11,
    "data": {
      "nao": 0.307,
      "amo": 0.326,
      "nino": -0.017,
      "pdo": 0.726,
      "iod": -0.094,
      "anino": 0.601,
      "ismr": 14.868
    }
  },
  {
    "year": 2006,
    "month": 12,
    "data": {
      "nao": 0.3,
      "amo": 0.318,
      "nino": -0.292,
      "pdo": 0.571,
      "iod": -0.078,
      "anino": 0.74,
      "ismr": 14.868
    }
  },
  {
    "year": 2007,
    "month": 1,
    "data": {
      "nao": 0.386,
      "amo": 0.402,
      "nino": 0.878,
      "pdo": 0.268,
      "iod": 0.332,
      "anino": 0.629,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 2,
    "data": {
      "nao": 0.338,
      "amo": 0.369,
      "nino": 0.395,
      "pdo": 0.209,
      "iod": 0.294,
      "anino": 0.777,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 3,
    "data": {
      "nao": 0.318,
      "amo": 0.321,
      "nino": 0.259,
      "pdo": 0.2,
      "iod": 0.205,
      "anino": 0.542,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 4,
    "data": {
      "nao": 0.307,
      "amo": 0.322,
      "nino": 0.207,
      "pdo": 0.175,
      "iod": 0.275,
      "anino": 0.566,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 5,
    "data": {
      "nao": 0.323,
      "amo": 0.319,
      "nino": 0.112,
      "pdo": 0.208,
      "iod": 0.526,
      "anino": 0.495,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 6,
    "data": {
      "nao": 0.339,
      "amo": 0.282,
      "nino": 0.148,
      "pdo": 0.287,
      "iod": 0.26,
      "anino": 0.547,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 7,
    "data": {
      "nao": 0.371,
      "amo": 0.277,
      "nino": 0.07,
      "pdo": 0.2,
      "iod": 0.323,
      "anino": 0.524,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 8,
    "data": {
      "nao": 0.347,
      "amo": 0.223,
      "nino": -0.118,
      "pdo": 0.315,
      "iod": 0.488,
      "anino": 0.397,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 9,
    "data": {
      "nao": 0.348,
      "amo": 0.306,
      "nino": -0.539,
      "pdo": 0.417,
      "iod": 0.399,
      "anino": 0.318,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 10,
    "data": {
      "nao": 0.46,
      "amo": 0.439,
      "nino": 1.109,
      "pdo": 0.382,
      "iod": 0.621,
      "anino": 0.799,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 11,
    "data": {
      "nao": 0.426,
      "amo": 0.435,
      "nino": 1.247,
      "pdo": 0.465,
      "iod": 0.544,
      "anino": 0.798,
      "ismr": 25.327
    }
  },
  {
    "year": 2007,
    "month": 12,
    "data": {
      "nao": 0.365,
      "amo": 0.359,
      "nino": 1.307,
      "pdo": 0.306,
      "iod": 0.169,
      "anino": 0.592,
      "ismr": 25.327
    }
  },
  {
    "year": 2008,
    "month": 1,
    "data": {
      "nao": 0.335,
      "amo": 0.271,
      "nino": -1.459,
      "pdo": 0.409,
      "iod": 0.046,
      "anino": 0.275,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 2,
    "data": {
      "nao": 0.323,
      "amo": 0.301,
      "nino": -1.552,
      "pdo": 0.302,
      "iod": -0.211,
      "anino": 0.299,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 3,
    "data": {
      "nao": 0.315,
      "amo": 0.323,
      "nino": -1.036,
      "pdo": 0.302,
      "iod": 0.079,
      "anino": 0.307,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 4,
    "data": {
      "nao": 0.235,
      "amo": 0.238,
      "nino": -0.803,
      "pdo": 0.408,
      "iod": -0.13,
      "anino": 0.187,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 5,
    "data": {
      "nao": 0.348,
      "amo": 0.334,
      "nino": -0.526,
      "pdo": 0.431,
      "iod": 0.214,
      "anino": 0.344,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 6,
    "data": {
      "nao": 0.524,
      "amo": 0.444,
      "nino": -0.29,
      "pdo": 0.46,
      "iod": 0.138,
      "anino": 0.458,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 7,
    "data": {
      "nao": 0.509,
      "amo": 0.409,
      "nino": 0.006,
      "pdo": 0.572,
      "iod": 0.186,
      "anino": 0.532,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 8,
    "data": {
      "nao": 0.441,
      "amo": 0.383,
      "nino": 0.147,
      "pdo": 0.552,
      "iod": 0.208,
      "anino": 0.71,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 9,
    "data": {
      "nao": 0.391,
      "amo": 0.353,
      "nino": -0.063,
      "pdo": 0.561,
      "iod": 0.239,
      "anino": 0.796,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 10,
    "data": {
      "nao": 0.367,
      "amo": 0.333,
      "nino": -0.955,
      "pdo": 0.456,
      "iod": 0.293,
      "anino": 0.311,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 11,
    "data": {
      "nao": 0.391,
      "amo": 0.341,
      "nino": -1.336,
      "pdo": 0.438,
      "iod": 0.151,
      "anino": 0.285,
      "ismr": 9.112
    }
  },
  {
    "year": 2008,
    "month": 12,
    "data": {
      "nao": 0.356,
      "amo": 0.284,
      "nino": -1.265,
      "pdo": 0.423,
      "iod": 0.024,
      "anino": 0.214,
      "ismr": 9.112
    }
  },
  {
    "year": 2009,
    "month": 1,
    "data": {
      "nao": 0.253,
      "amo": 0.236,
      "nino": -0.691,
      "pdo": 0.475,
      "iod": 0.34,
      "anino": 0.187,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 2,
    "data": {
      "nao": 0.216,
      "amo": 0.125,
      "nino": -0.683,
      "pdo": 0.374,
      "iod": 0.529,
      "anino": -0.073,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 3,
    "data": {
      "nao": 0.2,
      "amo": 0.111,
      "nino": -0.348,
      "pdo": 0.372,
      "iod": 0.466,
      "anino": -0.066,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 4,
    "data": {
      "nao": 0.215,
      "amo": 0.154,
      "nino": 0.01,
      "pdo": 0.424,
      "iod": 0.328,
      "anino": 0.074,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 5,
    "data": {
      "nao": 0.267,
      "amo": 0.159,
      "nino": 0.464,
      "pdo": 0.515,
      "iod": 0.555,
      "anino": -0.02,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 6,
    "data": {
      "nao": 0.423,
      "amo": 0.294,
      "nino": 0.777,
      "pdo": 0.624,
      "iod": 0.363,
      "anino": 0.189,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 7,
    "data": {
      "nao": 0.466,
      "amo": 0.351,
      "nino": 0.914,
      "pdo": 0.522,
      "iod": 0.021,
      "anino": 0.524,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 8,
    "data": {
      "nao": 0.459,
      "amo": 0.322,
      "nino": 0.86,
      "pdo": 0.371,
      "iod": 0.121,
      "anino": 0.574,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 9,
    "data": {
      "nao": 0.336,
      "amo": 0.269,
      "nino": 0.94,
      "pdo": 0.093,
      "iod": 0.172,
      "anino": 0.577,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 10,
    "data": {
      "nao": 0.278,
      "amo": 0.305,
      "nino": -0.089,
      "pdo": 0.586,
      "iod": 0.165,
      "anino": 0.644,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 11,
    "data": {
      "nao": 0.26,
      "amo": 0.286,
      "nino": -0.296,
      "pdo": 0.513,
      "iod": 0.156,
      "anino": 0.451,
      "ismr": -35.929
    }
  },
  {
    "year": 2009,
    "month": 12,
    "data": {
      "nao": 0.27,
      "amo": 0.272,
      "nino": -0.727,
      "pdo": 0.453,
      "iod": 0.197,
      "anino": 0.353,
      "ismr": -35.929
    }
  },
  {
    "year": 2010,
    "month": 1,
    "data": {
      "nao": 0.261,
      "amo": 0.281,
      "nino": 1.778,
      "pdo": 0.265,
      "iod": 0.312,
      "anino": 0.917,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 2,
    "data": {
      "nao": 0.23,
      "amo": 0.314,
      "nino": 1.403,
      "pdo": 0.191,
      "iod": 0.137,
      "anino": 1.248,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 3,
    "data": {
      "nao": 0.229,
      "amo": 0.369,
      "nino": 1.282,
      "pdo": 0.157,
      "iod": 0.4,
      "anino": 1.486,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 4,
    "data": {
      "nao": 0.302,
      "amo": 0.456,
      "nino": 0.887,
      "pdo": 0.072,
      "iod": 0.402,
      "anino": 1.528,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 5,
    "data": {
      "nao": 0.373,
      "amo": 0.481,
      "nino": 0.231,
      "pdo": 0.108,
      "iod": -0.271,
      "anino": 1.526,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 6,
    "data": {
      "nao": 0.477,
      "amo": 0.503,
      "nino": -0.182,
      "pdo": 0.204,
      "iod": -0.129,
      "anino": 1.434,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 7,
    "data": {
      "nao": 0.588,
      "amo": 0.536,
      "nino": -0.606,
      "pdo": 0.36,
      "iod": -0.153,
      "anino": 1.349,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 8,
    "data": {
      "nao": 0.656,
      "amo": 0.583,
      "nino": -0.98,
      "pdo": 0.424,
      "iod": -0.191,
      "anino": 1.284,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 9,
    "data": {
      "nao": 0.556,
      "amo": 0.471,
      "nino": -1.226,
      "pdo": 0.586,
      "iod": -0.531,
      "anino": 1.098,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 10,
    "data": {
      "nao": 0.303,
      "amo": 0.344,
      "nino": 1.217,
      "pdo": 0.282,
      "iod": 0.302,
      "anino": 0.685,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 11,
    "data": {
      "nao": 0.312,
      "amo": 0.299,
      "nino": 1.732,
      "pdo": 0.324,
      "iod": 0.148,
      "anino": 0.604,
      "ismr": 10.005
    }
  },
  {
    "year": 2010,
    "month": 12,
    "data": {
      "nao": 0.344,
      "amo": 0.32,
      "nino": 1.783,
      "pdo": 0.305,
      "iod": 0.461,
      "anino": 0.671,
      "ismr": 10.005
    }
  },
  {
    "year": 2011,
    "month": 1,
    "data": {
      "nao": 0.28,
      "amo": 0.338,
      "nino": -1.45,
      "pdo": 0.49,
      "iod": 0.031,
      "anino": 0.977,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 2,
    "data": {
      "nao": 0.232,
      "amo": 0.28,
      "nino": -0.956,
      "pdo": 0.418,
      "iod": -0.01,
      "anino": 0.757,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 3,
    "data": {
      "nao": 0.18,
      "amo": 0.249,
      "nino": -0.736,
      "pdo": 0.407,
      "iod": 0.29,
      "anino": 0.715,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 4,
    "data": {
      "nao": 0.201,
      "amo": 0.268,
      "nino": -0.41,
      "pdo": 0.395,
      "iod": 0.356,
      "anino": 0.692,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 5,
    "data": {
      "nao": 0.299,
      "amo": 0.29,
      "nino": -0.244,
      "pdo": 0.483,
      "iod": 0.057,
      "anino": 0.745,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 6,
    "data": {
      "nao": 0.348,
      "amo": 0.327,
      "nino": -0.013,
      "pdo": 0.476,
      "iod": 0.115,
      "anino": 0.978,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 7,
    "data": {
      "nao": 0.374,
      "amo": 0.296,
      "nino": 0.001,
      "pdo": 0.564,
      "iod": 0.036,
      "anino": 0.82,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 8,
    "data": {
      "nao": 0.459,
      "amo": 0.363,
      "nino": -0.31,
      "pdo": 0.632,
      "iod": 0.298,
      "anino": 0.771,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 9,
    "data": {
      "nao": 0.499,
      "amo": 0.348,
      "nino": -0.551,
      "pdo": 0.482,
      "iod": 0.366,
      "anino": 0.629,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 10,
    "data": {
      "nao": 0.47,
      "amo": 0.405,
      "nino": -1.398,
      "pdo": 0.351,
      "iod": -0.65,
      "anino": 0.908,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 11,
    "data": {
      "nao": 0.405,
      "amo": 0.408,
      "nino": -1.47,
      "pdo": 0.329,
      "iod": -0.006,
      "anino": 0.796,
      "ismr": 14.315
    }
  },
  {
    "year": 2011,
    "month": 12,
    "data": {
      "nao": 0.275,
      "amo": 0.32,
      "nino": -1.555,
      "pdo": 0.557,
      "iod": -0.033,
      "anino": 0.944,
      "ismr": 14.315
    }
  },
  {
    "year": 2012,
    "month": 1,
    "data": {
      "nao": 0.306,
      "amo": 0.246,
      "nino": -0.694,
      "pdo": 0.43,
      "iod": 0.218,
      "anino": 0.34,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 2,
    "data": {
      "nao": 0.32,
      "amo": 0.227,
      "nino": -0.532,
      "pdo": 0.342,
      "iod": -0.152,
      "anino": 0.218,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 3,
    "data": {
      "nao": 0.338,
      "amo": 0.246,
      "nino": -0.167,
      "pdo": 0.24,
      "iod": -0.14,
      "anino": 0.081,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 4,
    "data": {
      "nao": 0.329,
      "amo": 0.29,
      "nino": -0.055,
      "pdo": 0.087,
      "iod": -0.054,
      "anino": 0.205,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 5,
    "data": {
      "nao": 0.388,
      "amo": 0.338,
      "nino": 0.093,
      "pdo": 0.277,
      "iod": 0.099,
      "anino": 0.359,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 6,
    "data": {
      "nao": 0.562,
      "amo": 0.418,
      "nino": 0.343,
      "pdo": 0.125,
      "iod": 0.174,
      "anino": 0.498,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 7,
    "data": {
      "nao": 0.645,
      "amo": 0.475,
      "nino": 0.618,
      "pdo": 0.26,
      "iod": 0.661,
      "anino": 0.578,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 8,
    "data": {
      "nao": 0.73,
      "amo": 0.559,
      "nino": 0.903,
      "pdo": 0.353,
      "iod": 0.794,
      "anino": 0.588,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 9,
    "data": {
      "nao": 0.591,
      "amo": 0.528,
      "nino": 0.637,
      "pdo": 0.401,
      "iod": 0.665,
      "anino": 0.837,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 10,
    "data": {
      "nao": 0.402,
      "amo": 0.315,
      "nino": -0.566,
      "pdo": 0.426,
      "iod": 0.589,
      "anino": 0.611,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 11,
    "data": {
      "nao": 0.328,
      "amo": 0.241,
      "nino": -0.759,
      "pdo": 0.547,
      "iod": 0.316,
      "anino": 0.514,
      "ismr": -10.126
    }
  },
  {
    "year": 2012,
    "month": 12,
    "data": {
      "nao": 0.315,
      "amo": 0.245,
      "nino": -0.814,
      "pdo": 0.515,
      "iod": 0.242,
      "anino": 0.491,
      "ismr": -10.126
    }
  },
  {
    "year": 2013,
    "month": 1,
    "data": {
      "nao": 0.362,
      "amo": 0.316,
      "nino": -0.039,
      "pdo": 0.249,
      "iod": -0.068,
      "anino": 0.603,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 2,
    "data": {
      "nao": 0.309,
      "amo": 0.289,
      "nino": -0.005,
      "pdo": 0.257,
      "iod": -0.01,
      "anino": 0.564,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 3,
    "data": {
      "nao": 0.252,
      "amo": 0.311,
      "nino": 0.241,
      "pdo": 0.284,
      "iod": -0.006,
      "anino": 0.922,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 4,
    "data": {
      "nao": 0.258,
      "amo": 0.293,
      "nino": 0.155,
      "pdo": 0.36,
      "iod": -0.178,
      "anino": 0.759,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 5,
    "data": {
      "nao": 0.279,
      "amo": 0.287,
      "nino": 0.076,
      "pdo": 0.49,
      "iod": -0.116,
      "anino": 0.943,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 6,
    "data": {
      "nao": 0.372,
      "amo": 0.217,
      "nino": 0.001,
      "pdo": 0.658,
      "iod": -0.226,
      "anino": 0.614,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 7,
    "data": {
      "nao": 0.483,
      "amo": 0.368,
      "nino": 0.049,
      "pdo": 0.989,
      "iod": -0.184,
      "anino": 0.658,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 8,
    "data": {
      "nao": 0.512,
      "amo": 0.388,
      "nino": 0.104,
      "pdo": 1.095,
      "iod": -0.049,
      "anino": 0.762,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 9,
    "data": {
      "nao": 0.508,
      "amo": 0.416,
      "nino": 0.213,
      "pdo": 0.804,
      "iod": -0.072,
      "anino": 0.884,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 10,
    "data": {
      "nao": 0.51,
      "amo": 0.48,
      "nino": 0.48,
      "pdo": 0.272,
      "iod": 0.344,
      "anino": 0.855,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 11,
    "data": {
      "nao": 0.409,
      "amo": 0.402,
      "nino": 0.718,
      "pdo": 0.33,
      "iod": 0.189,
      "anino": 0.907,
      "ismr": 25.433
    }
  },
  {
    "year": 2013,
    "month": 12,
    "data": {
      "nao": 0.36,
      "amo": 0.326,
      "nino": 0.374,
      "pdo": 0.332,
      "iod": 0.102,
      "anino": 0.738,
      "ismr": 25.433
    }
  },
  {
    "year": 2014,
    "month": 1,
    "data": {
      "nao": 0.295,
      "amo": 0.24,
      "nino": -0.115,
      "pdo": 0.711,
      "iod": 0.283,
      "anino": 0.315,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 2,
    "data": {
      "nao": 0.312,
      "amo": 0.221,
      "nino": -0.018,
      "pdo": 0.56,
      "iod": 0.092,
      "anino": 0.182,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 3,
    "data": {
      "nao": 0.28,
      "amo": 0.191,
      "nino": 0.339,
      "pdo": 0.42,
      "iod": -0.07,
      "anino": 0.116,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 4,
    "data": {
      "nao": 0.262,
      "amo": 0.189,
      "nino": 0.584,
      "pdo": 0.421,
      "iod": -0.0,
      "anino": 0.14,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 5,
    "data": {
      "nao": 0.305,
      "amo": 0.219,
      "nino": 0.8,
      "pdo": 0.465,
      "iod": 0.072,
      "anino": 0.142,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 6,
    "data": {
      "nao": 0.463,
      "amo": 0.27,
      "nino": 0.662,
      "pdo": 0.921,
      "iod": -0.03,
      "anino": 0.145,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 7,
    "data": {
      "nao": 0.663,
      "amo": 0.388,
      "nino": 0.429,
      "pdo": 1.007,
      "iod": -0.142,
      "anino": 0.244,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 8,
    "data": {
      "nao": 0.72,
      "amo": 0.46,
      "nino": 0.362,
      "pdo": 1.179,
      "iod": -0.31,
      "anino": 0.209,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 9,
    "data": {
      "nao": 0.588,
      "amo": 0.433,
      "nino": 0.69,
      "pdo": 1.22,
      "iod": -0.067,
      "anino": 0.456,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 10,
    "data": {
      "nao": 0.575,
      "amo": 0.492,
      "nino": 0.197,
      "pdo": 0.494,
      "iod": 0.142,
      "anino": 0.824,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 11,
    "data": {
      "nao": 0.425,
      "amo": 0.373,
      "nino": 0.045,
      "pdo": 0.621,
      "iod": 0.398,
      "anino": 0.576,
      "ismr": -27.282
    }
  },
  {
    "year": 2014,
    "month": 12,
    "data": {
      "nao": 0.281,
      "amo": 0.277,
      "nino": -0.201,
      "pdo": 0.765,
      "iod": 0.032,
      "anino": 0.501,
      "ismr": -27.282
    }
  },
  {
    "year": 2015,
    "month": 1,
    "data": {
      "nao": 0.356,
      "amo": 0.303,
      "nino": 0.951,
      "pdo": 0.439,
      "iod": -0.131,
      "anino": 0.415,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 2,
    "data": {
      "nao": 0.256,
      "amo": 0.232,
      "nino": 0.882,
      "pdo": 0.386,
      "iod": 0.018,
      "anino": 0.449,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 3,
    "data": {
      "nao": 0.24,
      "amo": 0.183,
      "nino": 0.997,
      "pdo": 0.435,
      "iod": -0.016,
      "anino": 0.178,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 4,
    "data": {
      "nao": 0.243,
      "amo": 0.157,
      "nino": 1.251,
      "pdo": 0.53,
      "iod": 0.5,
      "anino": 0.035,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 5,
    "data": {
      "nao": 0.29,
      "amo": 0.241,
      "nino": 1.338,
      "pdo": 0.692,
      "iod": 0.626,
      "anino": 0.129,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 6,
    "data": {
      "nao": 0.301,
      "amo": 0.242,
      "nino": 1.55,
      "pdo": 0.788,
      "iod": 0.537,
      "anino": 0.063,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 7,
    "data": {
      "nao": 0.317,
      "amo": 0.26,
      "nino": 1.596,
      "pdo": 0.738,
      "iod": 0.602,
      "anino": 0.204,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 8,
    "data": {
      "nao": 0.414,
      "amo": 0.341,
      "nino": 1.797,
      "pdo": 0.881,
      "iod": 0.626,
      "anino": 0.467,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 9,
    "data": {
      "nao": 0.501,
      "amo": 0.453,
      "nino": 1.847,
      "pdo": 0.783,
      "iod": 0.775,
      "anino": 0.801,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 10,
    "data": {
      "nao": 0.497,
      "amo": 0.447,
      "nino": 0.754,
      "pdo": 0.774,
      "iod": 0.104,
      "anino": 0.624,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 11,
    "data": {
      "nao": 0.43,
      "amo": 0.338,
      "nino": 1.024,
      "pdo": 0.565,
      "iod": 0.225,
      "anino": 0.458,
      "ismr": -29.348
    }
  },
  {
    "year": 2015,
    "month": 12,
    "data": {
      "nao": 0.393,
      "amo": 0.323,
      "nino": 1.053,
      "pdo": 0.443,
      "iod": -0.105,
      "anino": 0.505,
      "ismr": -29.348
    }
  }
];

export default mockClimateDatabase;