const express = require("express");

const router = express.Router();
// ---------------------------------------------------
// TEST DATA (Realistic, not bogus)
// ---------------------------------------------------

const CREDIT_DATA = {
  // GOOD RESULT
  123456789: {
    bsn: "123456789",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 9000,
      totalMonthlyObligations: 325,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-001",
        lenderName: "Nederlandse Bank NV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2020-03-01",
        endDate: null,
        originalAmount: 15000,
        currentOutstandingAmount: 8000,
        monthlyObligation: 250,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-002",
        lenderName: "Winkel Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2019-07-15",
        creditLimit: 5000,
        currentOutstandingAmount: 1000,
        monthlyObligation: 75,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },
  111222333: {
    bsn: "111222333",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 6500,
      totalMonthlyObligations: 210,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-101",
        lenderName: "ABN AMRO Bank",
        creditType: "PERSONAL_LOAN",
        openingDate: "2021-01-20",
        endDate: null,
        originalAmount: 10000,
        currentOutstandingAmount: 6000,
        monthlyObligation: 200,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-102",
        lenderName: "Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2020-05-10",
        creditLimit: 3000,
        currentOutstandingAmount: 500,
        monthlyObligation: 10,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },

  // 2
  444555666: {
    bsn: "444555666",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 14000,
      totalMonthlyObligations: 500,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-201",
        lenderName: "ING Bank",
        creditType: "MORTGAGE",
        openingDate: "2017-09-01",
        endDate: null,
        originalAmount: 200000,
        currentOutstandingAmount: 13500,
        monthlyObligation: 450,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-202",
        lenderName: "MoneyNow BV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2019-11-12",
        endDate: "2024-11-12",
        originalAmount: 7000,
        currentOutstandingAmount: 0,
        monthlyObligation: 50,
        status: "CLOSED",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-203",
        lenderName: "Winkel Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2020-06-20",
        creditLimit: 4000,
        currentOutstandingAmount: 500,
        monthlyObligation: 20,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },

  // 3
  777888999: {
    bsn: "777888999",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 5000,
      totalMonthlyObligations: 160,
      totalNumberOfCredits: 1,
    },
    registrations: [
      {
        contractId: "CRD-301",
        lenderName: "Nederlandse Bank NV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-04-15",
        endDate: null,
        originalAmount: 6000,
        currentOutstandingAmount: 5000,
        monthlyObligation: 160,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },

  // 4
  112233445: {
    bsn: "112233445",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 13000,
      totalMonthlyObligations: 450,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-401",
        lenderName: "Rabobank",
        creditType: "MORTGAGE",
        openingDate: "2015-02-01",
        endDate: null,
        originalAmount: 180000,
        currentOutstandingAmount: 12000,
        monthlyObligation: 400,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-402",
        lenderName: "Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2021-08-12",
        creditLimit: 8000,
        currentOutstandingAmount: 1000,
        monthlyObligation: 50,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },

  // 5
  998877665: {
    bsn: "998877665",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 22000,
      totalMonthlyObligations: 720,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-501",
        lenderName: "ABN AMRO Bank",
        creditType: "MORTGAGE",
        openingDate: "2018-07-01",
        endDate: null,
        originalAmount: 250000,
        currentOutstandingAmount: 20000,
        monthlyObligation: 650,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-502",
        lenderName: "MoneyNow BV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2021-09-10",
        endDate: null,
        originalAmount: 7000,
        currentOutstandingAmount: 1500,
        monthlyObligation: 50,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-503",
        lenderName: "Winkel Krediet BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2020-12-01",
        creditLimit: 4000,
        currentOutstandingAmount: 500,
        monthlyObligation: 20,
        status: "ACTIVE",
        arrears: {
          hasArrears: false,
          arrearsCode: null,
          arrearsSince: null,
          resolvedOn: null,
        },
      },
    ],
  },
  // BAD RESULT
  987654321: {
    bsn: "987654321",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 22000,
      totalMonthlyObligations: 640,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-010",
        lenderName: "Online Krediet NL",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-01-10",
        endDate: null,
        originalAmount: 10000,
        currentOutstandingAmount: 9000,
        monthlyObligation: 320,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A2",
          arrearsSince: "2024-08-15",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-011",
        lenderName: "Store Finance BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2021-05-01",
        creditLimit: 3000,
        currentOutstandingAmount: 2500,
        monthlyObligation: 120,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A",
          arrearsSince: "2024-06-01",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-012",
        lenderName: "Auto Lease NL",
        creditType: "PRIVATE_LEASE",
        openingDate: "2019-09-01",
        endDate: "2023-09-01",
        originalAmount: 18000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2021-03-01",
          resolvedOn: "2021-07-15",
        },
      },
    ],
  },
  112233445: {
    bsn: "112233445",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 18000,
      totalMonthlyObligations: 550,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-013",
        lenderName: "Online Krediet NL",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-05-12",
        endDate: null,
        originalAmount: 12000,
        currentOutstandingAmount: 11000,
        monthlyObligation: 350,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A3",
          arrearsSince: "2024-07-20",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-014",
        lenderName: "Store Finance BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2021-08-01",
        creditLimit: 5000,
        currentOutstandingAmount: 5000,
        monthlyObligation: 150,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A2",
          arrearsSince: "2024-05-15",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-015",
        lenderName: "Auto Lease NL",
        creditType: "PRIVATE_LEASE",
        openingDate: "2018-04-01",
        endDate: "2022-04-01",
        originalAmount: 20000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2020-01-01",
          resolvedOn: "2020-07-01",
        },
      },
    ],
  },

  223344556: {
    bsn: "223344556",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 16000,
      totalMonthlyObligations: 480,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-016",
        lenderName: "De Volksbank",
        creditType: "PERSONAL_LOAN",
        openingDate: "2021-09-01",
        endDate: null,
        originalAmount: 17000,
        currentOutstandingAmount: 16000,
        monthlyObligation: 430,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A1",
          arrearsSince: "2024-06-30",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-017",
        lenderName: "LeasePlan",
        creditType: "CAR_LOAN",
        openingDate: "2019-01-01",
        endDate: "2023-01-01",
        originalAmount: 15000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2021-02-01",
          resolvedOn: "2021-09-01",
        },
      },
    ],
  },

  334455667: {
    bsn: "334455667",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 14000,
      totalMonthlyObligations: 400,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-018",
        lenderName: "ING Bank",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-03-10",
        endDate: null,
        originalAmount: 15000,
        currentOutstandingAmount: 14000,
        monthlyObligation: 380,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A2",
          arrearsSince: "2024-08-01",
          resolvedOn: null,
        },
      },
    ],
  },

  445566778: {
    bsn: "445566778",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 25000,
      totalMonthlyObligations: 800,
      totalNumberOfCredits: 4,
    },
    registrations: [
      {
        contractId: "CRD-020",
        lenderName: "SNS Bank",
        creditType: "PERSONAL_LOAN",
        openingDate: "2019-07-01",
        endDate: null,
        originalAmount: 30000,
        currentOutstandingAmount: 25000,
        monthlyObligation: 700,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A4",
          arrearsSince: "2024-09-01",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-021",
        lenderName: "Rabobank",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2019-5-01",
        endDate: null,
        originalAmount: 30000,
        currentOutstandingAmount: 25000,
        monthlyObligation: 700,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A4",
          arrearsSince: "2024-09-01",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-022",
        lenderName: "LeasePlan",
        creditType: "CAR_LOAN",
        openingDate: "2020-11-10",
        endDate: "2023-11-10",
        originalAmount: 25000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2021-03-01",
          resolvedOn: "2021-09-01",
        },
      },
      {
        contractId: "CRD-023",
        lenderName: "Aegon Bank",
        creditType: "PRIVATE_LEASE",
        openingDate: "2023-02-01",
        endDate: null,
        originalAmount: 15000,
        currentOutstandingAmount: 1000,
        monthlyObligation: 90,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A1",
          arrearsSince: "2024-07-01",
          resolvedOn: null,
        },
      },
    ],
  },

  556677889: {
    bsn: "556677889",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 19500,
      totalMonthlyObligations: 650,
      totalNumberOfCredits: 3,
    },
    registrations: [
      {
        contractId: "CRD-024",
        lenderName: "Delta Lloyd",
        creditType: "PERSONAL_LOAN",
        openingDate: "2023-01-01",
        endDate: null,
        originalAmount: 22000,
        currentOutstandingAmount: 19000,
        monthlyObligation: 600,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A3",
          arrearsSince: "2024-08-10",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-026",
        lenderName: "Rabobank",
        creditType: "PRIVATE_LEASE",
        openingDate: "2019-05-15",
        endDate: "2023-05-15",
        originalAmount: 18000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2020-06-01",
          resolvedOn: "2020-12-01",
        },
      },
    ],
  },
};

// ---------------------------------------------------
// API ROUTE
// ---------------------------------------------------

router.get("/credit-check", (req, res) => {
  const {bsn} = req.body;

  if (!bsn || typeof bsn !== "string") {
    return res.status(400).json({
      message: "Invalid request. 'bsn' must be provided as string.",
    });
  }

  // If BSN exists in test dataset -> return GOOD or BAD
  if (CREDIT_DATA[bsn]) {
    return res.json(CREDIT_DATA[bsn]);
  }

  // Otherwise return NO MATCH
  return res.json({
    bsn,
    matchStatus: "NO_MATCH",
    summary: {
      hasAnyRegistration: false,
      hasNegativeRegistration: false,
      totalOutstandingAmount: 0,
      totalMonthlyObligations: 0,
      totalNumberOfCredits: 0,
    },
    registrations: [],
    decisionHints: {
      riskLevel: "UNKNOWN",
      suggestedAction: "PROCEED_WITH_CAUTION",
    },
  });
});

// ---------------------------------------------------
module.exports = router;
