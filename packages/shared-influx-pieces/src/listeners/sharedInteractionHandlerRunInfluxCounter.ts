import { container, type ClientEventInteractionHandlerContext } from '@skyra/http-framework';
import { InfluxListener } from '../lib/structures/InfluxListener.js';

export class SharedListener extends InfluxListener {
	public constructor(context: InfluxListener.LoaderContext, options: InfluxListener) {
		super(context, { ...options, event: 'interactionHandlerRun' });
	}

	public run(context: ClientEventInteractionHandlerContext) {
		container.analytics!.interactionCounts[context.interaction.type] += 1;
	}
}
