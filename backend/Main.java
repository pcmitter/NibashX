import java.util.*;

class Main
{
    public static void main(String args[])
    {
        Scanner sc=new Scanner(System.in);

        ArrayList<Room> rooms=new ArrayList<Room>();

        rooms.add(new Room(101,"Standard",2500));
        rooms.add(new Room(102,"Deluxe",5000));
        rooms.add(new Room(103,"Suite",8500));

        System.out.println("===== NIBASHX HOTEL =====");

        for(Room r:rooms)
        {
            r.display();
        }

        System.out.println("Enter Customer Name:");
        String name=sc.nextLine();

        System.out.println("Enter Room Number:");
        int rn=sc.nextInt();

        Booking b=new Booking(name,rn);

        System.out.println("BOOKING SUCCESSFUL");

        b.show();
    }
}