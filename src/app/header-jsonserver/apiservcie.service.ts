import { Person } from './person';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiservcieService {
  baseURL: string = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  getPeople(): Observable<Person[]> {
    console.log('getPeople with get: ' + this.baseURL + 'people');
    return this.http.get<Person[]>(this.baseURL + 'people')
  }
//Adding headers
getPeopleWithHeaders(): Observable<Person[]> {
  const headers = { 'content-type': 'application/json'}
  console.log( 'Adding headers: ' + headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}

//Set method
getPeopleWithSet(): Observable<Person[]> {
  const headers = new HttpHeaders()
    .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
  console.log( 'setMethod: ' + headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{ 'headers' :headers})
}

//This wont work
getPeopleWithImmutable(): Observable<Person[]> {
  const headers = new HttpHeaders()
  headers.set('content-type','application/json')
  headers.set('Access-Control-Allow-Origin', '*');

  console.log( 'wont work: ' + headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}

getPeopleWithImmutable1(): Observable<Person[]> {
  let headers = new HttpHeaders()
  headers=headers.set('content-type','application/json')
  headers=headers.set('Access-Control-Allow-Origin', '*');

  console.log( 'Immutable : ' + headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}


getPeopleAppend(): Observable<Person[]> {
  let headers = new HttpHeaders()
  headers = headers.append('content-type','application/json')
  headers = headers.append('Access-Control-Allow-Origin', '*')
  headers = headers.append('content-type','application/x-www-form-urlencoded')
  headers = headers.append('customer-header', 'custom')
  console.log('append via Headers: ' + headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{ 'headers':headers})
}

getPeopleHas(): Observable<Person[]> {
  let headers = new HttpHeaders()
  //headers=headers.append('content-type','application/json')
  headers=headers.append('Access-Control-Allow-Origin', '*')
  if (!headers.has('content-type')) {
    headers=headers.append('content-type','application/json')
  }

  console.log( 'has via Headers: ' +  headers)
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}


getPeopleGet(): Observable<Person[]> {
  let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')

  const h =headers.get('content-type')
  if (h==null) {
    console.log('content type header not present')
  } else {
    console.log( 'getPeopelGet via Headers: ' +h)
  }


  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}

getPeopleGetAll(): Observable<Person[]> {
  let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .append('content-type','application/x-www-form-urlencoded')

  const h =headers.getAll('content-type')
  console.log( 'getPeopleGetAll via Headers: ' + h )
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}

getPeopleKeys(): Observable<Person[]> {
  let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .append('content-type','application/x-www-form-urlencoded')

  const h =headers.keys()
  console.log( 'getPeopleKeys via headers: ' + h )
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers':headers})
}

getPeopleDelete(): Observable<Person[]> {
  let headers = new HttpHeaders()
    .set('content-type','application/json')
    .set('Access-Control-Allow-Origin', '*')
    .append('content-type','application/x-www-form-urlencoded')


  headers=headers.delete('content-type','application/json')

  //headers=headers.delete("content-type")
  console.log('gePeopelDelete Headers: ' + headers )
  return this.http.get<Person[]>(this.baseURL + 'people',{'headers': headers})
}




  getPeopleFromObject(): Observable<Person[]> {

    let headers = new HttpHeaders({ 'Access-Control-Allow-Origin': '*', 'content-type': 'application/json'}  )

    console.log('getPeopleFrom Object Headers :' + headers )
    return this.http.get<Person[]>(this.baseURL + 'people',{ 'headers': headers})
  }

  addPerson(person:Person): Observable<Person> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(person);
    console.log( 'addPerson body:' + body)
    return this.http.post<Person>(this.baseURL + 'people', body, {'headers':headers})
  }

}