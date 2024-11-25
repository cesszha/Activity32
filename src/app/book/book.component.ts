import { Component, inject, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from '../book.model';
import { NgFor } from '@angular/common';

@Component({
	selector: 'app-book',
	standalone: true,
	imports: [NgFor],
	templateUrl: './book.component.html',
	styleUrl: './book.component.css',
})
export class BookComponent implements OnInit {
	private readonly _bookService = inject(BookService);
	books: Book[] = [];

	ngOnInit(): void {
		this._bookService.getBooks().subscribe((books: Book[]) => {
			this.books = books;
			console.log(books);
		});
	}
}