module.exports = function solveSudoku(matrix) {
  const getCandidats = (matrix,row,col) =>{ // возращает массив кандидатов для ячейки 
		let numbers = [1,2,3,4,5,6,7,8,9];      //вычитая стоку квадрат и горизонталь
		let r = Math.floor(row/3)*3, c = Math.floor(col/3)*3;
		
		for (let i = 0; i < 9; i++ ) {
			let squareR = r + (i%3);
			let squareC = c + Math.floor(i/3);
			numbers = numbers.filter((elem) => 
				elem !== matrix[row][i] && elem !== matrix[i][col] && elem !== matrix[squareR][squareC]);
		}
		return numbers;
	};

	for (let row = 0; row < 9; row++) {
		for (let col = 0; col < 9; col++) {
				if (matrix[row][col] !== 0) { continue }                 //идем по всем  элементам находим ноль 
				else { var candidats = getCandidats(matrix, row, col) }//возвращет массив кандидатов [1,2,3,4] например
				                                 
				for (let i = 0; i < candidats.length; i++) {    //примеряю кандидатов
					matrix[row][col] = candidats[i];        
					if (solveSudoku(matrix)) { return matrix }
				}
				matrix[row][col] = 0;
				return false;
		}
	}
	return matrix;
}
