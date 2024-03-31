import React, { useState, useEffect, useLayoutEffect } from 'react'

const UPDATE_CYCLE = 1000
const KEY_LOCALE = 'KEY_LOCALE'

enum Locale {
  EN = 'en-US',
  JA = 'ja-JP',
}

const getLocaleFromString = (text: string) => {
  switch (text) {
    case Locale.EN:
      return Locale.EN
    case Locale.JA:
      return Locale.JA
    default:
      return Locale.EN
  }
}

export const Clock = () => {
  const [timestamp, setTimestamp] = useState(new Date())
  const [locale, setLocale] = useState(Locale.EN)

  // side effect to set timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimestamp(new Date())
    }, UPDATE_CYCLE)

    return () => {
      clearInterval(timer)
    }
  }, [])  // 第2引数は依存配列で, 毎描画時に評価され, 中身が違うときに副作用が実行される

  // side effect to read local storage
  useLayoutEffect(() => {
    const savedLocale = localStorage.getItem(KEY_LOCALE)
    if (savedLocale !== null) {
      setLocale(getLocaleFromString(savedLocale))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(KEY_LOCALE, locale)
  }, [locale])

  return (
    <div>
      <p>
        <span id="current-time-label">現在時刻</span>
        <span>:{timestamp.toLocaleString(locale)}</span>
        <select
          value={locale}
          onChange={(e) => setLocale(getLocaleFromString(e.target.value))}>
          <option value="en-US">en-US</option>
          <option value="ja-JP">ja-JP</option>
        </select>
      </p>
    </div>
  )
}
