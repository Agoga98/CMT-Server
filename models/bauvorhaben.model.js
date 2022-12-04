const mongoose =  require('mongoose')

const bauvorhabenSchema = mongoose.Schema({
    BauvorhabenNummer: Number,
    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String,
    BetreuerVertrieb: String,
    BetreuerMontage: String,
    OrderInfo: {
        TotalAmount: Number,
        PaidAmount: Number,
        OutStandingAmount: Number,
        BillReminder1: Number,
        BillReminder2: Number,
        BillReminder3: Number,
        Directorypath: String
    },
    
    Adress: String,
    PostalCode: Number,
    City: String,
    Country: String
}, {
    timestamps: true
});

const BauvorhabenMessage = mongoose.model('bauvorhaben', bauvorhabenSchema);

module.exports = BauvorhabenMessage;