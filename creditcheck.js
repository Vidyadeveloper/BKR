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

  987655321: {
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

  123456780: {
    bsn: "123456780",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 15000,
      totalMonthlyObligations: 500,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-020",
        lenderName: "Quick Loans BV",
        creditType: "PERSONAL_LOAN",
        openingDate: "2023-03-15",
        endDate: null,
        originalAmount: 15000,
        currentOutstandingAmount: 15000,
        monthlyObligation: 500,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "B1",
          arrearsSince: "2024-07-10",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-021",
        lenderName: "Retail Credit NL",
        creditType: "CREDIT_CARD",
        openingDate: "2022-06-20",
        creditLimit: 4000,
        currentOutstandingAmount: 3000,
        monthlyObligation: 100,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A3",
          arrearsSince: "2024-09-01",
          resolvedOn: null,
        },
      },
    ],
  },

  234567891: {
    bsn: "234567891",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 18000,
      totalMonthlyObligations: 450,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-030",
        lenderName: "Finance4You",
        creditType: "CAR_LOAN",
        openingDate: "2021-11-11",
        endDate: null,
        originalAmount: 18000,
        currentOutstandingAmount: 17000,
        monthlyObligation: 450,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "C1",
          arrearsSince: "2024-05-20",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-031",
        lenderName: "Home Credit NL",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2020-04-22",
        creditLimit: 5000,
        currentOutstandingAmount: 1000,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "D",
          arrearsSince: "2022-02-01",
          resolvedOn: "2022-06-15",
        },
      },
    ],
  },

  345678912: {
    bsn: "345678912",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 25000,
      totalMonthlyObligations: 750,
      totalNumberOfCredits: 4,
    },
    registrations: [
      {
        contractId: "CRD-040",
        lenderName: "Fast Cash NL",
        creditType: "PERSONAL_LOAN",
        openingDate: "2022-08-01",
        endDate: null,
        originalAmount: 12000,
        currentOutstandingAmount: 10000,
        monthlyObligation: 300,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A4",
          arrearsSince: "2024-09-05",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-041",
        lenderName: "Shopping Finance",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2021-03-12",
        creditLimit: 6000,
        currentOutstandingAmount: 5000,
        monthlyObligation: 200,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "B2",
          arrearsSince: "2024-08-20",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-042",
        lenderName: "Auto Lease NL",
        creditType: "PRIVATE_LEASE",
        openingDate: "2019-10-10",
        endDate: "2023-10-10",
        originalAmount: 15000,
        currentOutstandingAmount: 0,
        monthlyObligation: 0,
        status: "CLOSED",
        arrears: {
          hasArrears: true,
          arrearsCode: "H",
          arrearsSince: "2021-04-01",
          resolvedOn: "2021-09-15",
        },
      },
      {
        contractId: "CRD-043",
        lenderName: "City Credit",
        creditType: "CREDIT_CARD",
        openingDate: "2020-01-01",
        creditLimit: 4000,
        currentOutstandingAmount: 4000,
        monthlyObligation: 50,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A5",
          arrearsSince: "2024-07-15",
          resolvedOn: null,
        },
      },
    ],
  },

  456789123: {
    bsn: "456789123",
    matchStatus: "EXACT",
    summary: {
      hasAnyRegistration: true,
      hasNegativeRegistration: true,
      totalOutstandingAmount: 13000,
      totalMonthlyObligations: 420,
      totalNumberOfCredits: 2,
    },
    registrations: [
      {
        contractId: "CRD-050",
        lenderName: "Easy Credit NL",
        creditType: "PERSONAL_LOAN",
        openingDate: "2020-07-20",
        endDate: null,
        originalAmount: 13000,
        currentOutstandingAmount: 12500,
        monthlyObligation: 400,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "B3",
          arrearsSince: "2024-06-25",
          resolvedOn: null,
        },
      },
      {
        contractId: "CRD-051",
        lenderName: "Store Finance BV",
        creditType: "REVOLVING_CREDIT",
        openingDate: "2019-05-15",
        creditLimit: 4000,
        currentOutstandingAmount: 3500,
        monthlyObligation: 20,
        status: "ACTIVE",
        arrears: {
          hasArrears: true,
          arrearsCode: "A2",
          arrearsSince: "2024-07-10",
          resolvedOn: null,
        },
      },
    ],
  },
};

// ---------------------------------------------------
// API ROUTE
// ---------------------------------------------------

router.get("/credit-check", (req, res) => {
  const {bsn} = req.query;

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
