import React,{ useState, useRef, useEffect } from "react";
import Wrapper from '../../assets/wrappers/BlogPage_66';
import { nanoid } from 'nanoid'

const order = (c) => {
    if (c === '+' || c === '-') return 1;
    else if (c === '*' || c === '/') return 2;
    else if (c === '^') return 3;
}

const DataStructPrefix = () => {
    const [infix, setInfix] = useState([]);
    const userInput = useRef(null);
    const CaltoInfix = () => {
        setInfix([]);
        let stack = [];
        let newInfixArray = [];
        let prefix = userInput.current.value;
        let charArray = [...prefix]
        for (let i = charArray.length - 1; i >= 0; i--) {
            if ((charArray[i] >= 'a' && charArray[i] <= 'z')||(charArray[i] >= 'A' && charArray[i] <= 'Z')) stack.push(charArray[i]);
            else if (charArray[i] === '+' || charArray[i] === '-' || charArray[i] === '*' || charArray[i] === '/' || charArray[i] == '^') {
                if (stack.length < 2) {
                    setInfix([]);
                    console.log('error');
                    break;
                }
                let op2 = stack.pop();
                if (op2.length > 1) {
                    let data = stack.pop();
                    if (order(data) < order(charArray[i])) op2 = '(' + op2 + ')';
                }
                let op1 = stack.pop();
                if (op1.length > 1) {
                    let data = stack.pop();
                    if (order(data) <= order(charArray[i])) op1 = '(' + op1 + ')';
                }
                
                let newinfix = op2 + charArray[i] + op1;
                stack.push(charArray[i]);
                stack.push(newinfix);
            }
            newInfixArray.push([...stack]);
            console.log(newInfixArray);
        }
        setInfix(newInfixArray);
        console.log(infix);
    }
    return (
        <Wrapper>
            <div className='pages'>
                <div className='section'>
                    <section className='section-title'>
                        <h2>前序轉中序</h2>
                    </section>
                    <section className='section-title'>
                        <h3>括號法:</h3>
                    </section>
                    <section className='section-content'>
                        <p>以運算子+運算元的組合依次將所有組合括號起來，並將運算子取代後方的右括號，並將得到的算式再次括號起來，即可得到中序式。</p>
                        <br />
                        <p>以這個運算式為例</p>
                        <p className='phighlight'>-+/A^BC*DE*AC</p>
                        <p>，以下為分解過程</p>
                        <br />
                        <p className='phighlight'>-+/A^BC*DE*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>-+(/A)^BC*DE*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>-+(/A)(^B)C*DE*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>-(+(/A)(^B)C)*DE*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>-(+(/A)(^B)C)(*D)E*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(/A)(^B)C)(*D)E)*AC</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(/A)(^B)C)(*D)E)(*A)C</p>
                        <p> -&gt; </p>
                        <p>開始移動運算子</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(/A)(B^C))(*D)E)(*A)C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(A/(B^C)))(*D)E)(*A)C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(A/(B^C)))(D*E))(*A)C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-(+(A/(B^C)))(D*E))(A*C)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(-((A/(B^C))+(D*E)))(A*C)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(((A/(B^C))+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p>最後移除多餘括號</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>A/B^C+D*E-A*C</p>
                        <br />
                        <p>在以上範例中，括號中的運算子優先權皆大於等於左括號左邊的運算子，所以才可以全部消除，但如果碰到這種情況</p>
                        <p className='phighlight'>(3*(2+1))</p>
                        <p>括號內的運算子優先程度小於括號左側運算子則不可消除</p>
                    </section>
                    <section className='section-title'>
                        <h3>堆疊法:</h3>
                    </section>
                    <section className='section-content'>
                        <p>堆疊法的原則:</p>
                        <br />
                        <p>1.由右至左讀取字元(後序由左至右)</p>
                        <br />
                        <p>2.如果讀入運算元則堆疊進Stack</p>
                        <br />
                        <p>3.如果讀入運算子則從Stack中pop兩個運算元，取出兩個運算元結合成一個中序式，然後把結果推入堆疊</p>
                        <br />
                        <p>4.前序的結合規則為[運算元2][運算子][運算元1](後序則相反)</p>
                        <br />
                        <p>5.若取出的為運算式需要特別判斷是否需要加括號，若為運算元2，優先度小於目前讀取的運算子則需要把右運算式加上括號. 而如果是運算元1,優先度小於等於目前讀取的運算子則需要把左運算式加上括號</p>
                        <br />
                        <p>以下是過程解析:</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*DE*AC</p>
                        <p>　Stack : </p><p className='phighlight'>[空]</p>
                        <p>　</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*DE*A</p>
                        <p>　Stack : </p><p className='phighlight'>[C]</p>
                        <p>　讀到C，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*DE*</p>
                        <p>　Stack : </p><p className='phighlight'>[CA]</p>
                        <p>　讀到A，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*DE</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)]</p>
                        <p>　讀到*，取出兩個運算元結合成中序式A*C，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*D</p>
                        <p>　Stack : <p className='phighlight'>[(A*C)E]</p></p>
                        <p>　讀到E，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC*</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)ED]</p>
                        <p>　讀到D，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^BC</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)]</p>
                        <p>　讀到*，取出兩個運算元結合成中序式D*E，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^B</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)C]</p>
                        <p>　讀到C，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A^</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)CB]</p>
                        <p>　讀到B，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/A</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)(B^C)]</p>
                        <p>　讀到^，取出兩個運算元結合成中序式B^C，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+/</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)(B^C)A]</p>
                        <p>　讀到A，推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-+</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(D*E)(A/B^C)]</p>
                        <p>　讀到/，取出兩個運算元結合成中序式A/B^C，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-</p>
                        <p>　Stack : </p><p className='phighlight'>[(A*C)(A/B^C+D*E)]</p>
                        <p>　讀到+，取出兩個運算元結合成中序式A/B^C+D*E，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　Stack : </p><p className='phighlight'>[(A/B^C+D*E-A*C)]</p>
                        <p>　讀到-，取出兩個運算元結合成中序式A/B^C+D*E-A*C，將結果推入堆疊</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　Stack : </p><p className='phighlight'>[空]</p>
                        <p>　讀到原式為空，轉換結束，將Stack pop()即為結果 -&gt; </p>
                        <p className='phighlight'>A/B^C+D*E-A*C</p>
                        <br />
                    </section>
                    <section className='section-title'>
                        <h3>前序轉中序計算機:</h3>
                    </section>
                    <section className='section-content'>
                        <p>(請輸入前序式)</p>
                        <input type="text" ref={userInput} />
                        <button className='btn' onClick={CaltoInfix}>計算</button>
                    </section>
                    <section className="section-content">
                        {
                            infix.map((temp, index) => {
                                return (<>
                                        <p>[Stack]</p>
                                        {temp.map((item) => {
                                            return (<><p>{item},&ensp;</p></>)
                                        })}
                                        <br />
                                </>)
                            })
                        }
                        <p>Ans&ensp;:&ensp;{infix.length > 0 ? infix[infix.length - 1][1] : ''}</p>
                    </section>
                </div>
            </div>
        </Wrapper>
    );
}


export default DataStructPrefix;