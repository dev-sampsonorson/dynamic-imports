/**
 * This script is going to be downloaded by
 * all user regardless of whether they are 
 * admins or not.
 */
import { setupAdminUser } from './admin.js';

if (user.admin) {
    setupAdminUser(user);
}