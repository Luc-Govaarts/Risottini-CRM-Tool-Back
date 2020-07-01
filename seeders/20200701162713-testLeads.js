'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("leads", [
      {
        company_name: "La Fiorita",
        associated_company_name: null,
        company_phone: 12345678,
        company_address: "Tweede Tuindwarsstraat 12 H, 1015 RZ Amsterdam",
        company_email: "Lafiorita@info.nl",
        supplier: "Makro",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        salesCyclePhaseId: 5,
        contactId: 1
      },
      {
        company_name: "Scheepskameel",
        associated_company_name: null,
        company_phone: 203379680,
        company_address: "Gebouw 024A, Kattenburgerstraat 5, 1018 JA Amsterdam",
        company_email: "info@scheepskameel.nl",
        supplier: "Hanos",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 2,
        salesCyclePhaseId: 2,
        contactId: 3
      },
      {
        company_name: "Karavaan",
        associated_company_name: "De 3 Wijzen uit 't Oosten",
        company_phone: 202357177,
        company_address: "Kwakersplein 2, 1053 TZ Amsterdam",
        company_email: "info@karavaan.nl",
        supplier: "Sligro",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        salesCyclePhaseId: 1,
        contactId: 2
      },
      {
        company_name: "Café Cómodo",
        associated_company_name: null,
        company_phone: 202252687,
        company_address: "Jan Pieter Heijestraat 110, 1054 MH Amsterdam",
        company_email: "info@cafecomodo.nl",
        supplier: "de Kweker",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 1,
        salesCyclePhaseId: 3,
        contactId: 2
      },
      {
        company_name: "Festina Lente",
        associated_company_name: null,
        company_phone: 206381412,
        company_address: "Looiersgracht 40B, 1016 VS Amsterdam",
        company_email: "info@festinalente.nl",
        supplier: "Hanos",
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 3,
        salesCyclePhaseId: 4,
        contactId: 4
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("leads", null, {});
  }
};
