import { NavLink } from "react-router-dom";
import Wrapper from "../../assets/wrappers/BlogPage_66";
import React, { useState, useRef, useEffect } from "react";
const NQueenQuestion = () => {
    const userInput = useRef(null);
    const [stack, setStack] = useState([]);
    const CalNqueenAnswer = () => {
        let tempArray = [];
        if (userInput.current.value > 8 || userInput.current.value < 1) return;
        let n = userInput.current.value;
        let board = new Array(n);
        for (let i = 0; i < n; i++) board[i] = new Array(n);
        for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) board[i][j] = 0;
        const legal = (r, c) => {
            if (r >= 0 && r < n && c >= 0 && c < n) return true;
            return false;
        };
        const isResonable = (row, col) => {
            let dir = [
                [-1, -1],
                [-1, 0],
                [-1, 1],
            ];
            for (let i = 0; i <= 2; i++) {
                let nr = row + dir[i][0],
                    nc = col + dir[i][1];
                if (legal(nr, nc)) {
                    switch (i) {
                        case 0:
                            while (nr >= 0 && nc >= 0)
                                if (board[nr--][nc--] === 1) return false;
                            break;
                        case 1:
                            while (nr >= 0) if (board[nr--][nc] === 1) return false;
                            break;
                        case 2:
                            while (nr >= 0 && nc < n)
                                if (board[nr--][nc++] === 1) return false;
                            break;
                    }
                }
            }
            return true;
        };
        let count = 0,
            row = 0,
            col = 0;
        while (1) {
            if (isResonable(row, col)) {
                board[row][col] = 1;
                row++;
                col = 0;
                if (row == n) {
                    tempArray.push(JSON.parse(JSON.stringify(board)));
                }
            } else col++;
            while (col >= n) {
                row--;
                if (row < 0) break;
                for (let i = 0; i < n; i++) {
                    if (board[row][i] === 1) {
                        board[row][i] = 0;
                        col = i + 1;
                        break;
                    }
                }
            }
            if (row < 0) {
                setStack(tempArray);
                console.log(tempArray);
                break;
            }
        }
    };
    return (
        <Wrapper>
            <div className="pages">
                <section className="section">
                    <section className="section-title">
                        <h2>N后問題</h2>
                    </section>
                    <section className="section-title">
                        <h3>演算法:</h3>
                    </section>
                    <section className="section-content">
                        <p>1.輸入皇后數量:</p>
                        <br />
                        <p>2.根據皇后數量n，創造一個n*n的棋盤:</p>
                        <br />
                        <p>
                            3.依序插入n個皇后，並在每插入一個新的皇后時，檢查左上、上、右上是否有皇后，如果位置合理，放置皇后到該位置並移動到下一列，假設位置不合理則移動到下一欄
                        </p>
                        <br />
                        <p>
                            4.如果移動欄到超過n，則代表這並不是解，回到上一列，並移動到下一欄，依此循環如果至第0列最後一欄還找不到解，則代表已經沒有解了，程式結束
                        </p>
                        <br />
                        <p>
                            5.假如移動到最後一列有找到合理位置，代表目前儲存的皇后位置為其中一個解，將此位置儲存並移動到上一列，重複執行步驟4
                        </p>
                    </section>
                    <section className="section-content">
                        <p>(請輸入皇后數量(1~8))</p>
                        <input type="number" ref={userInput} max={20} min={1} />
                        <button className="btn" onClick={CalNqueenAnswer}>
                            計算
                        </button>
                    </section>
                    <section className="section-content queen">
                        {stack.map((board, index) => {
                            return (
                                <>

                                    <div className="queen_block">
                                        <p>[第{index + 1}個解]</p>
                                        <br />
                                        {board.map((row) => {

                                            return (
                                                <>
                                                    <div className="queen_block_row">
                                                        {row.map((item) => {
                                                            return (
                                                                <>
                                                                    {item == 1 ? (
                                                                        <div className="block_q"></div>
                                                                    ) : (
                                                                        <div className="block_n"></div>
                                                                    )}
                                                                </>
                                                            );
                                                        })}
                                                    </div>
                                                </>
                                            );
                                        })}
                                    </div>
                                </>
                            );
                        })}
                    </section>
                </section>
            </div>
        </Wrapper>
    );
};

export default NQueenQuestion;
