INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('Marketing'),
    ('Production'),
    ('Finance');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Lead Engineer', 140000, 1),
    ('Senior Engineer', 100000, 1),
    ('Junior Engineer', 85000, 1),
    ('Marketing Lead', 110000, 2),
    ('Marketing Staff', 110000, 2),
    ('Project Manager', 210000, 3),
    ('Production Lead', 100000, 3),
    ('Production Staff', 90000, 3),
    ('Chief Finacial Officer', 250000, 4),
    ('Accountant', 90000, 4),
    ('Budgeting & Forecasting', 65000, 4),
    ('Payroll', 50000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
    ('Katelyn','Bright', 1, NULL),
    ('Wendi','Roach', 2, 1),
    ('Arlen','Dougherty', 2, 1),
    ('Loren','Chapman', 3, 1),
    ('Paul','Barker', 3, 1),
    ('Colette','Rosales', 3, 1),
    ('Melanie', 'Mcguire', 4, NULL ),
    ('Jeff','Hughes', 5, 7),
    ('Lorri','Blanchard', 5, 7),
    ('Lanny','Olsen', 6, NULL),
    ('Burl','Day', 7, 10),
    ('Scott ','Cole', 8, 10),
    ('Sydney','Herman', 8, 10),
    ('Gregorio','Vazquez', 8, 10),
    ('Graci ','Lynn', 9, NULL),
    ('Wilfred','Lee', 10, 15),
    ('Andrea','Hart', 10, 15),
    ('Aaron','Olson', 10, 15),
    ('Erin','Berger', 11, 15),
    ('Antione','Patton', 11, 15),
    ('Laverne','Blackwell', 12, 15),
    ('Mari','Frye', 12, 15);
    
    
    
    
    
    