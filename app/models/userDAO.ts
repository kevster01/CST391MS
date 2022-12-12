export class userDAO
{
    private id: any = -1;
    private name : string =" ";   
    private email : string = "";
    private password : string = "";


    constructor(id: any, name: string, email: string, password: string)
    {
        this.id =id;
        this.name=name; 
        this.email=email;
        this.password=password; 
    }

    public get Id(): any{
        return this.id; 
    }

    public set Id(id:any) {
        this.id= id;
    }

    
    public get Name(): string{
        return this.name; 
    }

    public set Name(name:string) {
        this.name= name;
    }

    public get Email(): string{
        return this.email; 
    }

    public set Email(email: string)
    {
        this.email = email;
    }

    public get Password(): string{
       return this.password;
    }

    public set Password(password:string)
    {
        this.password= password; 
    }
}