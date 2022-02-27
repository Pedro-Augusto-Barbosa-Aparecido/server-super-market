# Super Market System Management Server

## Installation

Clone the repositoy and run `yarn install` or `npm install`

## RUN API

On terminal run `yarn dev` or `npm run dev`
## Routes

### Brands

 - GET 
   - Many: [localhost/brand](http://localhost:3333/brand/)
   - Unique: [localhost/brand/:id_brand](http://localhost:3333/brand/anyId)
 - CREATE
   - Make a POST on `http://localhost:3333/brand/`
   - Body of request: `{ name: string, active: boolean }`
 - DELETE
   - Make a DELETE request on `http://localhost:3333/brand/:id_brand`
 - UPDATE
   - Make a PUT request on `http://localhost:3333/brand/:id_brand`
   - Body of request: `{ name?: string, active?: boolean }`
