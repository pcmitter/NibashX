class Customer
{
    String name;
    String email;
    String password;

    Customer(String n,String e,String p)
    {
        name=n;
        email=e;
        password=p;
    }

    void display()
    {
        System.out.println(name);
        System.out.println(email);
    }
}