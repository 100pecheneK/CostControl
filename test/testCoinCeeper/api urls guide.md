# API URLS GUIDE

## `api/costs/` - Costs

1. `api/costs/` - Costs today list. For filter - ?date=2020-03-03 

2. `api/costs/create/` - Costs create. 

     ```json
        {
            "money": Int,
            "cost_type": Int
        }
     ```

3. `api/costs/costTypes/` - Cost types list 

   ```json
   {
       "1": "Разное",
       "2": "Транспорт",
       "3": "Развлечения",
       "4": "Продукты"
   }
   ```

4. `api/costs/<int:pk>/` - Cost detail 

5. `api/costs/<int:pk>/update` - Cost update 

   ```json
   {
       "money": Int,
       "cost_type": Int
   }
   ```

6. `api/costs/<int:pk>/delete` - Cost delete 

7. `api/costs/costMonthSum/` - Cost Month Sum 

   ```json
   {
       "month_money_sum": Int
   }
   ```

8. `api/costs/costReport/` - Cost Report Sum 

   ```json
   {
       "cost_type": "Разное",
       "total_money": 615738
   },
   {
       "cost_type": "Развлечения",
       "total_money": 223123
   }
   ```

## api/user/` - User

1. `api/user/balance/` - user balance

   ```json
   {
       "balance": Int
   }
   ```



