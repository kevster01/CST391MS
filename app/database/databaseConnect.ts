import { userDAO } from "../models/userDAO";
import * as mysql  from "mysql";
import * as util from "util";


export class databaseConnect
{
    private host:string = "";
    private port: number = 3306;
    private username:string = ""; 
    private password:string = ""; 
    private schema:string = "users";
    private pool = this.initDbConnect();



    constructor(host:string, port:number, username:string, password:string)
    {
        this.host = host; 
        this.port = port; 
        this.username = username;
        this.pool = this.initDbConnect(); 
    }

    private initDbConnect():any
    {
        return mysql.createPool({host: this.host, port: this.port, user: this.username, password: this.password, database: this.schema, connectionLimit: 10})
    }

    public findAllUsers(callback: any)
    {
        let users:userDAO[] = []; 

        this.pool.getConnection(function(err:any, connection:any)
        {
            if (err) throw err
            
            connection.query('SELECT * FROM users', function (err:any, rows:any, fields:any)
            {
                connection.relase();

                if (err) throw err

                for(let x=0; x < rows.length; x++)
                {
                    users.push(new userDAO(rows[x].Id, rows[x].Name, rows[x].Email, rows[x].Password));
                }

                callback(users);
            });
        });
    }

    public findUsersById(id:number, callback: any)
    {
        let user:userDAO;
        
        this.pool.getConnection(function(err:any, connection:any)
        {
            if (err) throw err

            connection.query('SELECT * FROM users WHERE ID = '+id, function (err:any, rows:any, fields:any) 
            {
                connection.release();

                if (err) throw err

                for(let x=0;x < rows.length;++x)
                {
                    user = new userDAO(rows[x].ID, rows[x].Name, rows[x].Email, rows[x].Password);
                }
    
                callback(user);
            });
    
        });
    }

    public findUsersByName(name:string, callback: any)
    {
        let user:userDAO[] = [];
        
        this.pool.getConnection(function(err:any, connection:any)
        {
            if (err) throw err

            connection.query("SELECT * FROM users WHERE User LIKE '%"+name+"%'", function (err:any, rows:any, fields:any) 
            {
                connection.release();

                if (err) throw err

                for(let x=0;x < rows.length;++x)
                {
                    user.push(new userDAO(rows[x].ID, rows[x].Name, rows[x].Email, rows[x].Password));
                }
    
                callback(user);
            });
    
        });
    } 

    public findUserByEmail(email:string, callback: any)
    {
        let user:userDAO[] = [];
        
        this.pool.getConnection(function(err:any, connection:any)
        {
            if (err) throw err

            connection.query("SELECT * FROM users WHERE EMAIL LIKE '%"+email+"%'", function (err:any, rows:any, fields:any) 
            {
                connection.release();

                if (err) throw err

                for(let x=0;x < rows.length;++x)
                {
                    user.push(new userDAO(rows[x].ID, rows[x].Name, rows[x].Email, rows[x].Password));
                }
    
                callback(user);
            });
    
        });
    }

    public createUser(b:userDAO, callback: any)
    {
        this.pool.getConnection(async function(err:any, connection:any)
        {
            connection.release();

            if (err) throw err;

            connection.query = util.promisify(connection.query);
            let result1 = await connection.query('INSERT INTO users (name, email, password) VALUES(?,?,?)', [b.Name, b.Email, b.Password]);
            if(result1.affectedRows != 1)
            {
                callback(-1);
            }
            callback(result1.insertId);
        });
    }

    public updateUser(b:userDAO, callback: any)
    {
        this.pool.getConnection(async function(err:any, connection:any)
        {
                connection.release();

            if (err) throw err;

                let changes = 0;
                connection.query = util.promisify(connection.query);
            let result1 = await connection.query('UPDATE users SET name=?, email=?,  password=?', [b.Name, b.Email, b.Password]);
            if(result1.changedRows != 0)
                ++changes;
            callback(changes);
        }   );
    }



}
















