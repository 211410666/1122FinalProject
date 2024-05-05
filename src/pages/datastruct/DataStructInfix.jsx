import Wrapper from "../../assets/wrappers/BlogPage_66"
import React, { useState, useRef, useEffect } from "react";

const order = (c) => {
    if (c === '+' || c === '-') return 1;
    else if (c === '*' || c === '/') return 2;
    else if (c === '^') return 3;
}

const DataStructInfix = () => {
    const [prefix, setPrefix] = useState([]);
    const [postfix, setPostfix] = useState([]);
    const userInput = useRef(null);
    const CalInfix = () => {
        let newPrefix = [];
        let newPostfix = [];
        setPrefix([]);
        setPostfix([]);
        let infix = userInput.current.value;
        let charArray = [...infix];
        let stack = [];
        let OptStack = [];
        for (let i = 0; i < charArray.length; i++) {
            if ((charArray[i] >= 'a' && charArray[i] <= 'z') || (charArray[i] >= 'A' && charArray[i] <= 'Z')) stack.push(charArray[i]);
            else if (charArray[i] === '+' || charArray[i] === '-' || charArray[i] === '*' || charArray[i] === '/' || charArray[i] == '^' || charArray[i] == '(' || charArray[i] === ')') {
                if (OptStack.length === 0 || charArray[i] === '(') OptStack.push(charArray[i]);
                else if (charArray[i] != ')') {
                    while (OptStack.length != 0) {
                        if (OptStack[OptStack.length - 1] === '(') {
                            OptStack.push(charArray[i]);
                            break;
                        }
                        else if (order(charArray[i]) > order(OptStack[OptStack.length - 1])) {
                            OptStack.push(charArray[i]);
                            break;
                        }
                        stack.push(OptStack.pop());
                    }
                    if (OptStack.length === 0) OptStack.push(charArray[i]);
                }
                else if (charArray[i] === ')') {
                    while (OptStack.length != 0) {
                        if (OptStack[OptStack.length - 1] === '(') {
                            OptStack.pop();
                            break;
                        }
                        else stack.push(OptStack.pop());
                    }
                }
            }
            newPostfix.push([...stack]);
        }
        while (OptStack.length != 0) {
            stack.push(OptStack.pop());
        }
        newPostfix.push([...stack]);
        setPostfix(newPostfix);

        stack = [];
        for (let i = charArray.length; i >= 0; i--) {
            if ((charArray[i] >= 'a' && charArray[i] <= 'z') || (charArray[i] >= 'A' && charArray[i] <= 'Z')) stack.push(charArray[i]);
            else if (charArray[i] === '+' || charArray[i] === '-' || charArray[i] === '*' || charArray[i] === '/' || charArray[i] == '^' || charArray[i] == '(' || charArray[i] === ')') {
                if (OptStack.length === 0 || charArray[i] === ')') OptStack.push(charArray[i]);
                else if (charArray[i] != '(') {
                    while (OptStack.length != 0) {
                        if (OptStack[OptStack.length - 1] === ')') {
                            OptStack.push(charArray[i]);
                            break;
                        }
                        else if (order(charArray[i]) >= order(OptStack[OptStack.length - 1])) {
                            OptStack.push(charArray[i]);
                            break;
                        }
                        stack.push(OptStack.pop());
                    }
                    if (OptStack.length === 0) OptStack.push(charArray[i]);
                }
                else if (charArray[i] === '(') {
                    while (OptStack.length != 0) {
                        if (OptStack[OptStack.length - 1] === ')') {
                            OptStack.pop();
                            break;
                        }
                        else stack.push(OptStack.pop());
                    }
                }
            }
            newPrefix.push([...stack]);
        }
        while (OptStack.length != 0) {
            stack.push(OptStack.pop());
        }
        newPrefix.push([...stack]);
        stack.reverse();
        newPrefix.push([...stack]);
        setPrefix(newPrefix);
    }
    return (
        <Wrapper>
            <div className="pages">
                <section className="section">
                    <section className='section-title'>
                        <h2>中序式轉換後序前序</h2>
                    </section>
                    <section className='section-title'>
                        <h3>括號法:</h3>
                    </section>
                    <section className="section-content">
                        <p>中序轉換後序或前序使用括號法的前置動作相同，將式子由左至右讀取，並根據運算子的優先級依序將運算元+運算子+運算元括號起來，直至所有的運算子都處理完畢</p>
                        <br />
                        <p>以這個運算式為例</p>
                        <p className='phighlight'>A/B^C+D*E-A*C</p>
                        <p>，以下為分解過程</p>
                        <br />
                        <p className='phighlight'>A/B^C+D*E-A*C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>A/(B^C)+D*E-A*C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(A/(B^C))+D*E-A*C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(A/(B^C))+(D*E)-A*C</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(A/(B^C))+(D*E)-(A*C)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((A/(B^C))+(D*E))-(A*C)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(((A/(B^C))+(D*E))-(A*C))</p>
                        <br />
                        <p>然後接下來的步驟就是將運算子代替括號，如果要轉換為前序，則代替左括號刪除右括號，如果要轉換為後序，則代替右括號，刪除左括號。記得要從最內層括號開始處理才不會亂</p>
                        <br />
                        <p>轉前序</p><p> -&gt; </p>
                        <p className='phighlight'>(((A/(B^C))+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(((A/^BC)+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((/A^BC+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((/A^BC+*DE)-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(+/A^BC*DE-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(+/A^BC*DE-*AC)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>-+/A^BC*DE*AC</p>
                        <br />
                        <p>轉後序</p><p> -&gt; </p>
                        <p className='phighlight'>(((A/(B^C))+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(((A/BC^)+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((ABC^/+(D*E))-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((ABC^/+DE*)-(A*C))</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>((ABC^/+DE*)-AC*)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>(ABC^/DE*+-AC*)</p>
                        <p> -&gt; </p>
                        <p className='phighlight'>ABC^/DE*+AC*-</p>
                        <br />
                    </section>
                    <section className='section-title'>
                        <h3>堆疊法:</h3>
                    </section>
                    <section className="section-content">
                        <p>1.讀取方向:前序由右至左，後序由左至右</p>
                        <br />
                        <p>2.運算元:讀取到運算元直接輸出到前序或後序的堆疊中</p>
                        <br />
                        <p>3.括號:前序讀取到左括號彈出運算子堆疊直到碰到右括號為止，後序讀取到右括號彈出運算子直到遇到左括號為止,括號的優先級要特別注意,當堆入堆疊前優先級最大,堆入堆疊後優先級最小</p>
                        <br />
                        <p>4.當轉前序碰到運算子:和Stack頂端運算子比較如果大於等於Top則堆入，否則彈出運算子，直到Top小於目前讀取到的運算子，或是堆疊空了為止，最後堆疊堆入目前運算子</p>
                        <br />
                        <p>5.當轉後序碰到運算子:和Stack頂端運算子比較如果大於Top則堆入，否則彈出運算子，直到Top小於等於目前讀取到的運算子，或是堆疊空了為止，最後堆疊堆入目前運算子</p>
                        <br />
                        <p>6.中序式讀完後，如果運算子堆疊不是空，則將其內的運算子逐㇐彈出，輸出到後序式。</p>
                        <br />
                        <p>7.若轉換為前序最後印出由頂端開始讀取(視覺反向)，若轉換為後序最後印出則依照陣列順序(視覺正向)</p>
                        <br />
                        <p>以下是過程解析:(中序轉前序)</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Prefix : </p><p className='phighlight'>[空]</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-A*</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Prefix : </p><p className='phighlight'>[C]</p>
                        <p>　讀到C，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-A</p>
                        <p>　OptStack : </p><p className='phighlight'>[*]</p>
                        <p>　Prefix : </p><p className='phighlight'>[C]</p>
                        <p>　讀到*，OptStack為空，直接堆入</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-</p>
                        <p>　OptStack : </p><p className='phighlight'>[*]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA]</p>
                        <p>　讀到A，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*]</p>
                        <p>　讀到-，OptStack Top=[ * ]，[ - ]&lt;[ * ]，[ * ]彈出至Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E</p>
                        <p>　OptStack : </p><p className='phighlight'>[-]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*]</p>
                        <p>　讀到-，OptStack為空，直接堆入</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*</p>
                        <p>　OptStack : </p><p className='phighlight'>[-]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*E]</p>
                        <p>　讀到E，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D</p>
                        <p>　OptStack : </p><p className='phighlight'>[-*]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*E]</p>
                        <p>　讀到*，OptStack Top=[ - ]，[ * ]&ge;[ - ]，[ * ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+</p>
                        <p>　OptStack : </p><p className='phighlight'>[-*]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED]</p>
                        <p>　讀到D，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+</p>
                        <p>　OptStack : </p><p className='phighlight'>[-]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*]</p>
                        <p>　讀到+，OptStack Top=[ * ]，[ + ]&lt;[ * ]，[ * ]彈出至Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*]</p>
                        <p>　讀到+，OptStack Top=[ - ]，[ + ]&ge;[ - ]，[ * ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*C]</p>
                        <p>　讀到C，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+^]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*C]</p>
                        <p>　讀到^，OptStack Top=[ + ]，[ ^ ]&ge;[ + ]，[ ^ ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+^]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*CB]</p>
                        <p>　讀到B，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*CB^]</p>
                        <p>　讀到/，OptStack Top=[ ^ ]，[ / ]&lt;[ ^ ]，[ ^ ]彈出至Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+/]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*CB^]</p>
                        <p>　讀到/，OptStack Top=[ + ]，[ / ]&ge;[ + ]，[ / ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[-+/]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*CB^A]</p>
                        <p>　讀到A，推入堆疊Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Prefix : </p><p className='phighlight'>[CA*ED*CB^A/+-]</p>
                        <p>　彈出OptStack剩餘元素至Prefix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Prefix : </p><p className='phighlight'>[空]</p>
                        <p>　將Prefix Pop至空並逐個字元印出:</p>
                        <p className='phighlight'>-+/A^BC*DE*AC</p>
                        <br />
                        <p>以下是過程解析:(中序轉後序)</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A/B^C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[空]</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>/B^C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[A]</p>
                        <p>　讀到A，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>B^C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[/]</p>
                        <p>　Postfix : </p><p className='phighlight'>[A]</p>
                        <p>　讀到/，OptStack為空，直接堆入</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>^C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[/]</p>
                        <p>　Postfix : </p><p className='phighlight'>[AB]</p>
                        <p>　讀到B，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>C+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[/^]</p>
                        <p>　Postfix : </p><p className='phighlight'>[AB]</p>
                        <p>　讀到^，OptStack Top=[ / ]，[ ^ ]&gt;[ / ]，[ ^ ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[/^]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC]</p>
                        <p>　讀到C，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[/]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^]</p>
                        <p>　讀到+，OptStack Top=[ ^ ]，[ + ]&le;[ ^ ]，[ ^ ]彈出至Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>+D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/]</p>
                        <p>　讀到+，OptStack Top=[ / ]，[ + ]&le;[ / ]，[ / ]彈出至Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>D*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[+]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/]</p>
                        <p>　讀到+，OptStack為空，直接堆入</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>*E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[+]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/D]</p>
                        <p>　讀到D，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>E-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[+*]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/D]</p>
                        <p>　讀到*，OptStack Top=[ + ]，[ * ]&gt;[ + ]，[ * ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[+*]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE]</p>
                        <p>　讀到E，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[+]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*]</p>
                        <p>　讀到-，OptStack Top=[ * ]，[ - ]&le;[ * ]，[ * ]彈出至Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>-A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+]</p>
                        <p>　讀到-，OptStack Top=[ + ]，[ - ]&le;[ + ]，[ + ]彈出至Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>A*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[-]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+]</p>
                        <p>　讀到-，OptStack為空，直接堆入</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>*C</p>
                        <p>　OptStack : </p><p className='phighlight'>[-]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+A]</p>
                        <p>　讀到A，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>C</p>
                        <p>　OptStack : </p><p className='phighlight'>[-*]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+A]</p>
                        <p>　讀到*，OptStack Top=[ - ]，[ * ]&gt;[ - ]，[ * ]堆入堆疊OptStack</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[-*]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+AC]</p>
                        <p>　讀到C，推入堆疊Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+AC*-]</p>
                        <p>　彈出OptStack剩餘元素至Postfix</p>
                        <br />
                        <p>原式:</p><p className='phighlight'>[空]</p>
                        <p>　OptStack : </p><p className='phighlight'>[空]</p>
                        <p>　Postfix : </p><p className='phighlight'>[ABC^/DE*+AC*-]</p>
                        <p>　將Postfix 由index=0開始直接逐個印出所有字元:</p>
                        <p className='phighlight'>ABC^/DE*+AC*-</p>
                        <br />
                    </section>
                    <section className='section-title'>
                        <h3>中序轉前後序計算機:</h3>
                    </section>
                    <section className='section-content'>
                        <p>(請輸入中序式)</p>
                        <input type="text" ref={userInput} />
                        <button className='btn' onClick={CalInfix}>計算</button>
                    </section>
                    <section className="twocol">
                        <section className="section-content">
                            <section className="section-title"><h3>前序式</h3></section>
                            {
                                prefix.map((temp, index) => {
                                    return (<>
                                        <p>[Stack]</p>
                                        {temp.map((item) => {
                                            return (<><p>{item},&ensp;</p></>)
                                        })}
                                        <br />
                                    </>)
                                })
                            }
                            <p>Ans&ensp;:&ensp;{prefix.length > 0 ? prefix[prefix.length - 1] : ''}</p>
                        </section>
                        <section className="section-content">
                            <section className="section-title"><h3>後序式</h3></section>
                            {
                                postfix.map((temp, index) => {
                                    return (<>
                                        <p>[Stack]</p>
                                        {temp.map((item) => {
                                            return (<><p>{item},&ensp;</p></>)
                                        })}
                                        <br />
                                    </>)
                                })
                            }
                            <p>Ans&ensp;:&ensp;{postfix.length > 0 ? postfix[postfix.length - 1] : ''}</p>
                        </section>
                    </section>
                </section>
            </div>
        </Wrapper>
    )
}

export default DataStructInfix
