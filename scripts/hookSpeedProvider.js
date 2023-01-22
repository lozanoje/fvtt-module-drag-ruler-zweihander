
Hooks.once("dragRuler.ready", (SpeedProvider) => {
    class zweihanderSpeedProvider extends SpeedProvider {
        get colors() {
            return [
                {id: "maneuver", default: 0x1259b6, name: "zweihander.speeds.maneuver"},
                {id: "hustle", default: 0x00FF00, name: "zweihander.speeds.hustle"},
                {id: "charge", default: 0xFFFF00, name: "zweihander.speeds.charge"},
                {id: "run", default: 0xFF8000, name: "zweihander.speeds.run"}
            ];
        };

        getRanges(token) {
			// MANEUVER: 1 yd
			// HUSTLE: MOV
			// CHARGE: MOV*2
			// RUN: MOV*3
			
			const minSpeed = 1;
            const baseSpeed = token.actor.system.stats.secondaryAttributes.movement.current;
            const chargeSpeed = baseSpeed * 2;
            const runSpeed = baseSpeed * 3;
			
            const ranges = [
                {range: minSpeed, color: "maneuver"},
                {range: baseSpeed, color: "hustle"},
                {range: chargeSpeed, color: "charge"},
                {range: runSpeed, color: "run"}
            ];

            return ranges;
        };
    }
    dragRuler.registerModule("fvtt-module-drag-ruler-zweihander", zweihanderSpeedProvider);
})
