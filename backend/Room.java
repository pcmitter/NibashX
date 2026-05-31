class Room
{
    int roomNo;
    String type;
    double price;
    boolean available;

    Room(int r,String t,double p)
    {
        roomNo=r;
        type=t;
        price=p;
        available=true;
    }

    void display()
    {
        System.out.println(roomNo+" "+type+" "+price+" "+available);
    }
}