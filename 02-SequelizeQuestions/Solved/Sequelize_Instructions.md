* **Instructions:**

* Spend the next few minutes with your partner answering the following questions. You should be using the Sequelize Documentation (and whatever other references you find online).

  ```
# Answer: What is Sequelize?
$ ORM

# Answer: What advantages does it offer?
$ Less syntax errors
$ Less headache
$  Standardization


# Answer: How do I install it? How do I incorporate it into my app?
$ npm install --save sequelize
# This will install 

# And one of the following: 
# Postgres 
$ npm install --save pg pg-hstore 
$ npm install --save mysql2
$ npm install --save mariadb
$ npm install --save sqlite3
 # Microsoft SQL Server 
$ npm install --save tedious


# Answer: What the heck is a Sequelize model? What role will it play?
$ JavaScript object which matches your database table

# Answer: Let's say I have the below table in MySQL. 

  		| Country     | PhoneCode | Capital   | IndependenceYear |
  		|-------------|-----------|-----------|------------------|
  		| Afghanistan | 93        | Kabul     | 1919             |
  		| Belarus     | 375       | Misk      | 1991             |
  		| Netherlands | 31        | Amsterdam | 1648             |
  		| Oman        | 968       | Muscat    | 1970             |
  		| Zambia      | 260       | Lusaka    | 1964             |

# How would I model it in Sequelize? 
$ var tableName = sequelize.define('tableName', {
	Country: {
		type: Sequelize.STRING
	},
	PhoneCode: Sequelize.INTEGER,
	Capital: Sequelize.STRING,
	IndependenceYear: Sequelize.INTEGER
},
{
	freeseTableName: true
});

#  How would I query for all the records where the Independence Year was less than 50 years ago?
tableName.findAll({
	where: {
		IndependenceYear: {
			$gt: new Date().getFullYear() - 50
		}
	}
})

# How would I query the table, order it by descending Independence Years, and limit the results to just show 2 of the records. Skipping the first two? (i.e. Results: Zambia, Afghanistan)

# Bonus: How do I use Sequelize to make changes to an existing table with data in it? 
tableName.findAll ({
	offset: 2,
	limit: 2,
	order: [[sequelize.col('IndependenceYear'), 'DESC]];
});