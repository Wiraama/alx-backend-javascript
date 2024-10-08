import ClassRoom from './0-classroom.js';

export function initializeRooms() {
  const roomSizes = [18, 20, 34];
  return roomSizes.map(sizes => new ClassRoom(size));
}
