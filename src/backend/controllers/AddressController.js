import { Response } from "miragejs";
import { formatDate, requiresAuth } from "../utils/authUtils";
import { v4 as uuid } from "uuid";


/**
 * All the routes related to Address are present here.
 * These are private routes.
 * Client needs to add "authorization" header with JWT token in it to access it.
 * */

/**
 * This handler handles getting items to user's Address.
 * send GET Request at /api/user/address
 * */

export const getAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  if (!userId) {
    new Response(
      404,
      {},
      {
        errors: ["The email you entered is not Registered. Not Found error"],
      }
    );
  }
  const userAddress = schema.users.findBy({ _id: userId }).address;
  return new Response(200, {}, { address: userAddress });
};

/**
 * This handler handles adding items to user's Address.
 * send POST Request at /api/user/address
 * body contains {product}
 * */

export const addAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    const userAddress = schema.users.findBy({ _id: userId }).address;
    const { address } = JSON.parse(request.requestBody);

    if (userAddress.find((item) => item.name === address.name))
      throw new Error("Name already exists");

    userAddress.push({
      ...address,
      _id:uuid(),
      createdAt: formatDate(),
      updatedAt: formatDate(),
    });
    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(201, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};

/**
 * This handler handles removing items to user's Address.
 * send DELETE Request at /api/user/address
 * body contains {product}
 * */


export const removeAddressHandler = function (schema, request) {
    const userId = requiresAuth.call(this, request);
    try {
      if (!userId) {
        new Response(
          404,
          {},
          {
            errors: ["The email you entered is not Registered. Not Found error"],
          }
        );
      }
      let userAddress = schema.users.findBy({
        _id: userId,
      }).address;
  
      const addressId = request.params.addressId;
  
      userAddress = userAddress.filter((item) => item._id !== addressId);
      this.db.users.update(
        {
          _id: userId,
        },
        {
          address: userAddress,
        }
      );
      return new Response(
        200,
        {},
        {
          address: userAddress,
        }
      );
    } catch (error) {
      return new Response(
        500,
        {},
        {
          error,
        }
      );
    }
  };
  

/**
 * This handler handles adding items to user's Address.
 * send POST Request at /api/user/address
 * body contains {product}
 * */

export const editAddressHandler = function (schema, request) {
  const userId = requiresAuth.call(this, request);
  try {
    if (!userId) {
      new Response(
        404,
        {},
        {
          errors: ["The email you entered is not Registered. Not Found error"],
        }
      );
    }
    let userAddress = schema.users.findBy({ _id: userId }).address;
    const { address } = JSON.parse(request.requestBody);
    console.log(address._id, userAddress);
    if (!userAddress.find((item) => item._id === address._id))
      throw new Error("Address does not exist");

    let existingAddress = userAddress.find((item) => item._id === address._id)
    const getIndex = userAddress.findIndex((item) => item._id === address._id)

    existingAddress = {
      ...existingAddress,
      ...address,
    };

    userAddress[getIndex] = existingAddress;

    this.db.users.update({ _id: userId }, { address: userAddress });
    return new Response(201, {}, { address: userAddress });
  } catch (error) {
    return new Response(
      500,
      {},
      {
        error,
      }
    );
  }
};