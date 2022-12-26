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
<<<<<<< HEAD
        type: String,
        enum : ['Angebots-Erstellung', 
                'Warten auf Antwort',
                'Nachverhandlung', 
                'Änderung durch Kunden', 
                'Naturmaß messen',
                'Berechnung',
                'Lieferungsdatum steht aus', 
                'Auftrag ersteilt',
                'Montagetermin festlegen',
                'In Montage',
                'Feinheiten',
                'Fertigstellung'],
        default: 'Baustellen messen'
=======
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
>>>>>>> f18c36c42fb8bcccc6a9875317d3ff1d692cef47
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
