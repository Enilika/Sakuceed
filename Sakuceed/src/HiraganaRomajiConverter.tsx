import React, { useState, useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Romanizer from "js-hira-kata-romanize";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hiraganaToRomaji = (r: any, hiragana: string): string => {
  const roman = r.romanize(hiragana);
  return roman;
};

const countCharacters = (text: string): number => {
  // 拗音（小さいゃゅょっ）と記号を除外するための正規表現
  // eslint-disable-next-line no-irregular-whitespace
  const excludePattern = /[ぁぃぅぇぉゃゅょゎ、。！？「」『』（）［］【】・…　 ]/g;
  return text.replace(excludePattern, "").length;
};

const HiraganaToRomajiConverter: React.FC = () => {
  const [hiragana, setHiragana] = useState<string>("");
  const [romaji, setRomaji] = useState<string>("");
  const [charCount, setCharCount] = useState<number[]>([]);
  const [inputHeight, setInputHeight] = useState<string>("auto");
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const countRef = useRef<HTMLDivElement>(null);
  const r = new Romanizer({ chouon: Romanizer.CHOUON_ALPHABET, upper: Romanizer.UPPER_NONE });

  useEffect(() => {
    setRomaji(hiraganaToRomaji(r, hiragana));
    setCharCount(hiragana.split("\n").map((line) => countCharacters(line)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hiragana]);

  useEffect(() => {
    const updateHeight = () => {
      if (inputRef.current) {
        const newHeight = `${inputRef.current.scrollHeight}px`;
        setInputHeight(newHeight);
        if (countRef.current) {
          countRef.current.style.height = newHeight;
        }
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, [hiragana]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setHiragana(e.target.value);
  };

  return (
    <div className="p-4 max-w-3xl mx-auto bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100">
      <div className="mb-4 flex">
        <div className="flex-grow mr-4">
          <label className="block text-sm font-medium mb-2">ひらがなを入力</label>
          <textarea
            ref={inputRef}
            value={hiragana}
            onChange={handleInput}
            className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            style={{ height: inputHeight, minHeight: "100px", resize: "vertical" }}
          />
        </div>
        <div className="w-24 flex flex-col">
          <label className="block text-sm font-medium mb-2">文字数</label>
          <div
            ref={countRef}
            className="flex-grow border border-gray-300 dark:border-gray-600 rounded-md p-2 overflow-auto bg-white dark:bg-gray-700"
            style={{ minHeight: "100px" }}
          >
            {charCount.map((count, index) => (
              <div key={index} className="mb-1 text-sm">
                {count > 0 ? (
                  `行 ${index + 1}: ${count}`
                ) : (
                  <span className="text-gray-400 dark:text-gray-500">（空行）</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">ローマ字</label>
        <textarea
          value={romaji}
          readOnly
          className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-100 dark:bg-gray-600 text-gray-900 dark:text-gray-100"
          style={{ height: inputHeight, minHeight: "100px", resize: "none" }}
        />
      </div>
    </div>
  );
};

export default HiraganaToRomajiConverter;
