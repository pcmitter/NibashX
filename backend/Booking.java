class Booking
{
    String customer;
    int roomNo;

    Booking(String c,int r)
    {
        customer=c;
        roomNo=r;
    }

    void show()
    {
        System.out.println("Customer: "+customer);
        System.out.println("Room No: "+roomNo);
    }
}