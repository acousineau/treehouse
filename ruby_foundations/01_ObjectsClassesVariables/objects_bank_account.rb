class BankAccount
    
    def initialize(name)
       @transactions = []
       @balance = 0
    end
    
    def deposit
       print "How much would you like to deposit? "
       amount = gets.chomp
       @balance += amount.to_f
       puts "$#{amount} deposited."
    end
    
    def show_balance
        puts "Your balance is #{@balance}"
    end
    
end

bank_account = BankAccount.new("Andy Cousineau")
bank_account.class # => BankAccount

bank_account.deposit
bank_account.show_balance