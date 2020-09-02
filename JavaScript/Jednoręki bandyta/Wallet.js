class Wallet {
    constructor(money) {
        let _money = money;

        this.getWalletValue = () => _money;
        this.CheckIsItEnoughMoney = (value) => {
            if (_money >= value) return true;
            return false;
        }
        this.ChangeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    _money += value;
                } else if (type === "-") {
                    _money -= value;
                } else {
                    throw new Error("Nieprawidłow typ")
                }

            } else {
                throw new Error("nieprawidłowa wartość")
            }
        }
    }
}