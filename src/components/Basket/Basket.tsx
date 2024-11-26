"use client";
import React from "react";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
import { removeItem } from "@/redux/slices/basketSlice";
import "./Basket.css";
import Link from "next/link";

const Basket = () => {
  const items = useAppSelector((state) => state.basket.items);
  const dispatch = useAppDispatch();

  const handleRemove = (index: number) => {
    dispatch(removeItem(index));
  };

  return (
    <div>
      <div className="basket">
        {items.length === 0 ? (
          <div className="empty">
            <p>
              В корзине пока пусто{" "}
              <span>Загляните на главную, чтобы выбрать !</span>
            </p>
            <Link href={"/product"}>Перейти на главную</Link>
          </div>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                <img src={item.image} alt="img" />
                {item.title} - ${item.price}
                <button onClick={() => handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Basket;
