# POC



### Background

This project is associated with RESTFul Microservices. which is a human resource management system, help administrator to CRUD the employee's information, implement inter-service communication.



### Tech Stack

1. Front End: Angular 8/ RxJS/ HTML 5/ CSS 3/ Bootstrap 4

2. Back end: Java/ Java Spring

3. Security: JWT.io / HttpInterceptor/ Spring Security

4. Data Base: AWS RDS MySQL, MongoDB, Redis

5. Microservices: Spring Cloud, AWS EC2

6. Message Queues: AWS SQS/SNS  
7. Online Storage: AWS S3


### How to Run?
1. Install the Node.js 
2. Install the Angular-cli  

install the angular with npm

    npm install -g @angular/cli

start the  front end application in the **Hawkeyes/client**

    ng serve

<img src="https://lewisphotoes.s3.us-east-2.amazonaws.com/1603416810(1).jpg">


3. Configure the S3 Buckey API Key in the **file-upload.service.ts**

<img src="https://lewisphotoes.s3.us-east-2.amazonaws.com/1603416999(1).jpg">

4. Configure the Spring Boot Application

Modify the configuration in **Application.Properties**

    spring.jpa.database = MYSQL
    spring.datasource.driverClassName=com.mysql.cj.jdbc.Driver
    spring.jpa.hibernate.ddl-auto = update
    spring.datasource.url=
    spring.datasource.username=
    spring.datasource.password=
    spring.jpa.show-sql = 

Configure the JWT Spring Security:

    	@Override
    protected void configure(HttpSecurity httpSecurity) throws Exception {
    	// We don't need CSRF for this example
    	httpSecurity.csrf().disable()
    			// dont authenticate this particular request
    			.authorizeRequests().antMatchers("/login","/register").permitAll().
    			// all other requests need to be authenticated
    			anyRequest().authenticated().and().
    			// make sure we use stateless session; session won't be used to
    			// store user's state.
    			exceptionHandling().authenticationEntryPoint(jwtAuthenticationEntryPoint).and().sessionManagement()
    			.sessionCreationPolicy(SessionCreationPolicy.STATELESS);
    
    	// Add a filter to validate the tokens with every request
    	httpSecurity.addFilterBefore(jwtRequestFilter, UsernamePasswordAuthenticationFilter.class);


		httpSecurity.cors();
	}






