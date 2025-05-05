import { useRef } from "react";
import * as styles from "./Library.module.css";

const Library = (props) => {
	const inputValue = useRef();

	const addNewWord = async (e) => {
		e.preventDefault();
		const response = await fetch(
			`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`
		);
		const translation = await response.json();

		const updateLibrary = [
			...props.library,
			{
				word: translation.word,
				translate: translation.translate,
				learn: 0,
			},
		];
		props.setLibrary(updateLibrary);
		localStorage.setItem("library", JSON.stringify(updateLibrary));
		inputValue.current.value = "";
	};

	const deleteWord = (id) => {
		const updateLibrary = props.library.filter(
			(word, index) => index !== id
		);
		props.setLibrary(updateLibrary);
		localStorage.setItem("library", JSON.stringify(updateLibrary));
	};

	return (
		<section className={styles.libraryBlock}>
			<span>
				Add new <b>Word</b>
			</span>

			<form onSubmit={addNewWord} className={styles.addWordBlock}>
				<input ref={inputValue} type="text" />

				<button>+</button>
			</form>

			<div className={styles.wordsTable}>
				<ul>
					<li>
						<h3>Word</h3>
					</li>
					<li>
						<h3>Translation</h3>
					</li>
					<li>
						<h3>Learn</h3>
					</li>
				</ul>

				{props.library.map((word, index) => (
					<ul key={index}>
						<li>{word.word}</li>
						<li>{word.translate}</li>
						<li>{word.learn}</li>

						<li className={styles.settings}>
							<button onClick={() => deleteWord(index)}>
								Del
							</button>
						</li>
					</ul>
				))}
			</div>
		</section>
	);
};

export default Library;
