# 1
  - create a dns records to direct their domains to our server
  - serve front based on `Host` header

 
# 2
  -  add relation to company in user table
  -  change unique key to company_id + email, to allow users to sign up with the same email on different sites 

# 3
  - api gateway or bff checks the host and authenticate the user for the company associated with this host. Append JWT with info about user and company he authenticated in, to pass to other services