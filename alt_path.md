```mermaid
    sequenceDiagram
      autonumber
        actor U as User
        participant C as Client
        participant S as Server
        participant DB as Database
          U->>C: enter User data
          alt is wrong on Client
          C-xC: not correct email (RegExp)
          C-xC: not correct phone (RegExp)
          C-xC: not correct password (too short or invalid symbols)
          else is correct on Client
          C->>S: send auth data to validate
          end
          alt is wrong on Server
          S-xS: 500 Internal Server Error & another errors
          else is correct on Server
          S->>DB: check User details
          end
          alt is wrong on DB
          DB-xDB: no email matches
          DB-xDB: no phone matches
          DB-xDB: no password matches
          else is correct on DB
          DB->>DB: validate User
          DB-->>S: access to make session
          end
          S-->>C: response cookie & permission
          C-->>U: get the content
```