class TicTacToe {
    constructor() {
        this.currentSymbol = 'x';
        this.field = [
            [null, null, null],
            [null, null, null],
            [null, null, null],
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] === null) {
            this.field[rowIndex][columnIndex] = this.currentSymbol;
            this.currentSymbol = this.currentSymbol === 'x' ? 'o' : 'x';
        }
    }

    isFinished() {
        return !!this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        const firstDiagonal = this.field.reduce((a, b, i) => a + b[i], '');
        if (firstDiagonal === 'xxx' || firstDiagonal === 'ooo') {
            return firstDiagonal[0];
        }

        const secondDiagonal = this.field.reduce((a, b, i) => a + b[2 - i], '');
        if (secondDiagonal === 'xxx' || secondDiagonal === 'ooo') {
            return secondDiagonal[0];
        }

        for (let i = 0; i < 3; ++i) {
            const row = this.field[i].join('');
            if (row === 'xxx' || row === 'ooo') return row[0];

            const column = this.field.reduce((a, b) => a + b[i], '');
            if (column === 'xxx' || column === 'ooo') return column[0];
        }
        return null;
    }

    noMoreTurns() {
        for (let rowIndex = 0; rowIndex < 3; ++rowIndex) {
            for (let colIndex = 0; colIndex < 3; ++colIndex) {
                if (this.field[rowIndex][colIndex] === null) return false;
            }
        }
        return true;
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.field[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
