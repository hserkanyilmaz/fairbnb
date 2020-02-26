import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Rental } from './rental.model';

const rentalsData: Rental[] = [
  {
    'id': '1',
    'title': 'Central Apartment',
    'city': 'New York',
    'street': 'Times Sqaure',
    'category': 'apartment',
    'image': 'http://via.placeholder.com/350x250',
    'bedrooms': 3,
    'description': 'Very nice apartment',
    'dailyRate': 34,
    'shared': false,
    'createdAt': '24/12/2017'
  },
  {
    'id': '2',
    'title': 'Central Apartment 2',
    'city': 'San Francisco',
    'street': 'Main street',
    'category': 'condo',
    'image': 'http://via.placeholder.com/350x250',
    'bedrooms': 2,
    'description': 'Very nice apartment',
    'dailyRate': 12,
    'shared': true,
    'createdAt': '24/12/2017'
  },
  {
    'id': '3',
    'title': 'Central Apartment 3',
    'city': 'Bratislava',
    'street': 'Hlavna',
    'category': 'condo',
    'image': 'http://via.placeholder.com/350x250',
    'bedrooms': 2,
    'description': 'Very nice apartment',
    'dailyRate': 334,
    'shared': true,
    'createdAt': '24/12/2017'
  },
  {
    'id': '4',
    'title': 'Central Apartment 4',
    'city': 'Berlin',
    'street': 'Haupt strasse',
    'category': 'house',
    'image': 'http://via.placeholder.com/350x250',
    'bedrooms': 9,
    'description': 'Very nice apartment',
    'dailyRate': 33,
    'shared': true,
    'createdAt': '24/12/2017'
  }
];

const urls = [
    {
        url: 'http://localhost:4200/mock/api/rentals',
        json: rentalsData
    }
];

@Injectable()
export class HttpMockInterceptor implements HttpInterceptor {
    constructor(private injector: Injector, private http: HttpClient) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        for (const element of urls) {
          if (request.url === element.url) {
            return of(new HttpResponse({ status: 200, body: (element.json) as any }));
          } else {
            const rentalId = request.url.slice(request.url.lastIndexOf('/') + 1, request.url.length);

            return of(new HttpResponse({ status: 200, body: (element.json.find(rental => rental.id === rentalId)) as any }));
          }
        }

       return next.handle(request);
    }
}
