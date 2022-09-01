import React from "react";
import {ItemNutritionInfo} from "./itemNutritionBlock";

const ItemNutritionBlock = ({totalNutrients, totalDaily}) => {
    return (
        <ItemNutritionInfo>
            <h5>Пищевая ценность порции</h5>
            <ul>
                <li>
                    <span>{`Энергетическая ценность: ${totalNutrients.ENERC_KCAL.quantity.toFixed(2)} ккал`}</span>
                    <span>{`${totalDaily.ENERC_KCAL.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Кальций: ${totalNutrients.CA.quantity.toFixed(2)} гр`}</span>
                    <span>{`${totalDaily.CA.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Холестерол: ${totalNutrients.CHOLE.quantity.toFixed(2)} мг`}</span>
                    <span>{`${totalDaily.CHOLE.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Цинк: ${totalNutrients.ZN.quantity.toFixed(2)} мг`}</span>
                    <span>{`${totalDaily.ZN.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Протеин: ${totalNutrients.PROCNT.quantity.toFixed(2)} гр`}</span>
                    <span>{`${totalDaily.PROCNT.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин E: ${totalNutrients.TOCPHA.quantity.toFixed(2)} мг`}</span>
                    <span>{`${totalDaily.TOCPHA.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин A: ${totalNutrients.VITA_RAE.quantity.toFixed(2)} мкг`}</span>
                    <span>{`${totalDaily.VITA_RAE.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин B6: ${totalNutrients.VITB6A.quantity.toFixed(2)} мг`}</span>
                    <span>{`${totalDaily.VITB6A.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин B12: ${totalNutrients.VITB12.quantity.toFixed(2)} мкг`}</span>
                    <span>{`${totalDaily.VITB12.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин C: ${totalNutrients.VITC.quantity.toFixed(2)} мг`}</span>
                    <span>{`${totalDaily.VITC.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин D: ${totalNutrients.VITD.quantity.toFixed(2)} мкг`}</span>
                    <span>{`${totalDaily.VITD.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
                <li>
                    <span>{`Витамин K: ${totalNutrients.VITK1.quantity.toFixed(2)} мкг`}</span>
                    <span>{`${totalDaily.VITK1.quantity.toFixed(0)}% суточной нормы`}</span>
                </li>
            </ul>
        </ItemNutritionInfo>
    )
};

export default ItemNutritionBlock;
