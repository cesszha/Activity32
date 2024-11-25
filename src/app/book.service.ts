import { Injectable } from '@angular/core';
import { Book } from './book.model';
import { Observable, of } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class BookService {
	samplePlaceholderImageURl = 'https://placehold.co/400';

	private books: Book[] = [
		{
			id: 1,
			title: 'A Whisker Away',
			genre: ' Fantasy, Romance, Drama',
			author: 'Mari Okada',
			year: 2020,
			imageUrl: '/whisker away.jpg',
			description:
				'A Whisker Away follows Miyo Sasaki, a 14-year-old girl who transforms into a cat to get closer to her crush, Kento Hinode. This enchanting film explores themes of identity and first love as Miyo navigates the challenges of adolescence while blurring the lines between her human and feline selves. ',
			rating: 4.5,
		},
		{
			id: 2,
			title: 'Wolf Children',
			genre: 'Fantasy, Drama',
			author: ' Mamoru Hosoda',
			year: 2012,
			imageUrl: '/Wolf Children (2012).jpg',
			description:
				'Wolf Children tells the touching story of Hana raising her two children—Yuki and Ame—who are half-wolf after their father passes away. As they grow up, they struggle with their dual identities while Hana tries to provide them normal lives despite their unique heritage.',
			rating: 4.8,
		},
		{
			id: 3,
			title: 'Suzume',
			genre: 'Fantasy, Adventure',
			author: 'Makoto Shinkai',
			year: 2022,
			imageUrl: '/Suzume.jpg',
			description:
				'Suzume follows Suzume Iwato as she embarks on an adventure across Japan to close mysterious doors that unleash disasters upon the world. Along her journey, she meets various characters that help her understand her strength and resolve.',
			rating: 4.7,
		},
		{
			id: 4,
			title: 'The Garden of Words',
			genre: 'Drama, Romance',
			author: 'Makoto Shinkai ',
			year: 2013,
			imageUrl: '/The Garden of Words.jpg',
			description:
				'The Garden of Words tells the story of Takao Akizuki, who meets Yukari Yukino in a park during rainy mornings. Their relationship develops as they both grapple with personal struggles.',
			rating: 4.6,
		},
		{
			id: 5,
			title: 'Weathering With You',
			genre: 'Fantasy, Romance',
			author: 'F. Scott Fitzgerald',
			year: 2019,
			imageUrl: '/weathering-with-u.jpg',
			description:
				'Weathering With You follows Hodaka Morishima as he moves to Tokyo where he meets Hina Amano, who can control weather conditions. Their bond grows as they navigate challenges posed by climate change while trying to create happiness amidst adversity.',
			rating: 4.4,
		},
		{
			id: 6,
			title: 'A Silent Voice',
			genre: 'Drama, Romance',
			author: 'Yoshitoki Ōima',
			year: 2016,
			imageUrl: '/A Silent Voice.jpg',
			description:
				'A Silent Voice follows Shoya Ishida, a former bully who seeks redemption by reconnecting with Shoko Nishimiya, a deaf girl he tormented in elementary school. The film explores themes of bullying, mental health, and the struggle for forgiveness as Shoya grapples with his past actions.',
			rating: 4.2,
		},
		{
			id: 7,
			title: 'Your Name',
			genre: 'Fantasy, Romance',
			author: 'Makoto Shinkai',
			year: 2016,
			imageUrl: '/your-name.jpg',
			description:
				'Your Name follows two teenagers—Mitsuha Miyamizu and Taki Tachibana—who mysteriously swap bodies intermittently without explanation. As they navigate each other lives from different locations in Japan, they develop an emotional connection that transcends time and space.',
			rating: 4.3,
		},
		{
			id: 8,
			title: 'Whisper of the Heart',
			genre: 'Drama, Romance',
			author: 'Aoi Hiiragi',
			year: 1995,
			imageUrl: '/whisper-of-the-heart.jpg',
			description:
				'Whisper of the Heart centers on Shizuku Tsukishima, an aspiring writer who discovers her passion for storytelling while pursuing her dreams in Tokyo’s bustling environment. She meets Seiji Amasawa whose ambition inspires her journey toward self-discovery as she navigates adolescence challenges—friendship dynamics included. The film beautifully captures youthful aspirations through its charming animation style paired with relatable character development.',
			rating: 4.1,
		},
		{
			id: 9,
			title: 'Ocean Waves ',
			genre: 'Drama, Romance',
			author: 'Kaori Nakamura',
			year: 1993,
			imageUrl: '/ocean-waves.jpg',
			description:
				'Ocean Waves is a coming-of-age story about two high school students navigating their feelings for their classmate Rikako during a school trip to Tokyo. The film explores themes of friendship, love, and nostalgia as Taku reflects on his youth. It stands out for its realistic portrayal of teenage emotions and relationships. The animation style is more subdued compared to other Studio Ghibli films but captures youthful experiences.',
			rating: 4.9,
		},
		{
			id: 10,
			title: 'My Neighbor Totoro',
			genre: 'Fantasy, Family',
			author: 'Hayao Miyazaki ',
			year: 1866,
			imageUrl: '/totoro.jpg',
			description:
				'My Neighbor Totoro tells the heartwarming story about two sisters—Satsuki & Mei—who move into an old house in rural Japan where they encounter friendly forest spirits including Totoro;',
			rating: 4.5,
		},
		{
			id: 11,
			title: 'The Boy and the Heron',
			genre: 'Fantasy, Adventure',
			author: 'Hayao Miyazaki ',
			year: 2023,
			imageUrl: '/boy and heron.jpg',
			description:
				'The Boy and the Heron follows Mahito, a young boy who embarks on a journey through a fantastical world after experiencing personal loss. Guided by a mysterious heron, he encounters magical creatures and learns profound lessons about life and death. ',
			rating: 4.6,
		},
		{
			id: 12,
			title: 'The Cat Returns ',
			genre: 'Fantasy, Adventure',
			author: 'Aoi Hiiragi',
			year: 1932,
			imageUrl: '/the-cat-returns-studio-ghibli-fest-2024-177674.jpg',
			description:
				'The Cat Returns features Haru, who saves a cat only to be whisked away to the Cat Kingdom where she must marry the Cat Prince. With help from Baron, a cat statue come to life, she navigates this strange world to find her way back home. The film combines humor with charming animation while exploring bravery and self-identity themes. Its considered an enchanting companion piece to Whisper of the Heart.',
			rating: 4.4,
		},
		{
			id: 13,
			title: 'When Marnie Was There ',
			genre: ' Drama, Mystery',
			author: 'Joan G. Robinson',
			year: 2014,
			imageUrl: '/when-marnie-was-there-japanese-poster-900x0-c-default.jpg',
			description:
				'When Marnie Was There tells Anna Sasaki’s story—a shy girl sent to stay with relatives in rural Japan—who discovers an abandoned mansion where she meets Marnie—a mysterious girl with whom she forms an intense friendship over summer days spent together exploring nature’s beauty around them. As secrets unfold about Marnie past intertwined with Anna family history emerges throughout their time together; this poignant tale explores friendship loss identity acceptance beautifully animated by Studio Ghiblis signature style.',
			rating: 4.3,
		},
		{
			id: 14,
			title: 'Castle in the Sky',
			genre: 'Fantasy, Adventure',
			author: 'Hayao Miyazaki',
			year: 1986,
			imageUrl: '/castle-in-the-sky-sm-web.jpg',
			description:
				'Castle in the Sky follows Sheeta and Pazu as they search for the legendary floating castle Laputa. They must evade pirates and government agents while uncovering secrets about Laputas advanced technology. The film is celebrated for its imaginative world-building and themes of environmentalism and peace. Its blend of action and fantasy has made it a beloved classic in animation.',
			rating: 4.5,
		},
		{
			id: 15,
			title: 'Arrietty',
			genre: 'Fantasy, Adventure',
			author: 'Mary Norton',
			year: 2010,
			imageUrl: '/arrietty-us-poster.jpg',
			description:
				'Arrietty tells the story of a tiny girl who lives with her family under the floorboards of a house. When she befriends a human boy named Shawn, their friendship leads to adventures that challenge their worlds boundaries. The film beautifully illustrates themes of friendship, family, and environmentalism through its charming animation. It captures the wonder of a miniature world and the significance of connection.',
			rating: 4.7,
		},
		{
			id: 16,
			title: 'Ponyo',
			genre: 'Fantasy, Adventure',
			author: 'Hayao Miyazaki',
			year: 2008,
			imageUrl: 'ponyo-on-the-cliff-movie-poster-2008-1020417340-900x0-c-default.jpg',
			description:
				'Ponyo tells the enchanting story of a goldfish princess who dreams of becoming human after befriending a young boy named Sosuke. Their friendship triggers chaos in both the human and ocean worlds. The film features vibrant colors and imaginative sequences while emphasizing themes of love and environmentalism. It showcases Hayao Miyazakis whimsical storytelling style.',
			rating: 4.6,
		},
		{
			id: 17,
			title: 'Princess Mononoke',
			genre: 'Fantasy, Adventure',
			author: 'Hayao Miyazaki',
			year: 1997,
			imageUrl: 'studio-ghibli-images-slide-FE3T-jumbo.jpg',
			description:
				'Princess Mononoke is set in Japans Muromachi period and follows Ashitaka as he seeks peace between humans and nature spirits after being cursed by a boar demon. He encounters San, a warrior raised by wolves fighting against industrialization threatening her forest home. The film addresses environmentalism and conflict through complex characters and stunning visuals. It remains one of Studio Ghiblis most acclaimed works.',
			rating: 4.8,
		},
		{
			id: 18,
			title: 'The Wind Rises',
			genre: 'Historical Drama',
			author: 'Hayao Miyazaki ',
			year: 2013,
			imageUrl: '/TheWindRisesPoster-900x0-c-default.jpg',
			description:
				'The Wind Rises is inspired by real-life aviation engineer Jiro Horikoshis dreams during pre-war Japan as he strives towards designing fighter planes amid personal sacrifices along his journey toward success amid historical turmoil surrounding him; it intertwines romance elements between Jiro & Nahoko—a woman whose health deteriorates due to tuberculosis—showcasing how love can flourish even under challenging circumstances while pursuing one’s passions depicted through breathtaking visuals characteristic within Studio Ghibli films.',
			rating: 4.9,
		},
		{
			id: 19,
			title: 'Kikis Delivery Service',
			genre: 'Fantasy, Coming-of-Age',
			author: 'Eiko Kadono ',
			year: 1989,
			imageUrl: '/kikis-delivery-service-md-web.jpg',
			description:
				'Kikis Delivery Service follows Kiki, a young witch who moves to a new town to start her own delivery service. With her talking cat Jiji by her side, she learns about independence and friendship while facing challenges in her new life. The film is praised for its charming animation and positive messages about growing up. It captures the spirit of adventure and community.',
			rating: 4.4,
		},
		{
			id: 20,
			title: 'Spirited Away',
			genre: 'Fantasy, Adventure',
			author: 'Hayao Miyazaki',
			year: 2001,
			imageUrl:'/Studio Ghibli Films.jpg',
			description:
				'Spirited Away follows Chihiro, a young girl trapped in a magical spirit world after her parents are transformed into pigs. To rescue them, she must work at a bathhouse run by witch Yubaba while navigating supernatural challenges. The film explores themes of identity and resilience through rich storytelling and breathtaking animation. It won numerous awards, including an Academy Award for Best Animated Feature.',
			rating: 4.7,
		},
	];

	getBooks(): Observable<Book[]> {
		return of(this.books);
	}
}