const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    ProjectNumber: Number,
    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String,
    BetreuerVertrieb: String,
    BetreuerMontage: String,
    Status: {
      type: String,
      enum: [
        "Angebots-Erstellung",
        "Warten auf Antwort",
        "Nachverhandlung",
        "Änderung durch Kunden",
        "Auftrag ersteilt",
        "Naturmaß messen",
        "Berechnung",
        "Lieferungsdatum steht aus",
        "Montagetermin festlegen",
        "In Montage",
        "Feinheiten",
        "Fertigstellung",
      ],
      default: "Angebots-Erstellung",
    },
    OrderInfo: {
      TotalAmount: Number,
      PaidAmount: Number,
      OutStandingAmount: Number,
      BillReminder1: Number,
      BillReminder2: Number,
      BillReminder3: Number,
      Directorypath: String,
    },

    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String,
    CustomerID: { type: mongoose.Schema.Types.ObjectId, ref: "Customer" },
  },
  {
    timestamps: true,
  }
);

const ProjectMessage = mongoose.model("Project", projectSchema);

module.exports = ProjectMessage;
