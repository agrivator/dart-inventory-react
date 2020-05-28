# Dart Simple Interface for Inventory Management

A simple react project for dart interface for inventory management of CRUD operations.

## Getting Started

```bash
git clone
cd dir
npm install
npm start
```

## File Structure: Reference

1. ProductInventoryPage : To add new inventories to a product
2. ProductPage: To add new products.
3. ProductListPage: This will be an overview page with all products
4. SignInPage: Entry point for allowed users.

## issues

1. Highest Priority Task: Implementing Signin and saving the token to a store.

   - Store could be effector(favoured), redux(overkill) or mobyx (good)
   - Localstorage not needed for security reasons

2. All routes must be verified with token to avoid public access, a class would be better choice
