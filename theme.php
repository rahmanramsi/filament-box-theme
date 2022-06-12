<?php

use Filament\Facades\Filament;
use Filament\Forms\Components\Card;
use Filament\Forms\Components\Radio;
use OpenSynergic\ThemesManager\Theme;

return new class extends Theme
{
  public $coverImg = 'cover.png';

  public function init(): void
  {
    Filament::serving(function () {
      Filament::registerTheme($this->asset('dist/box.css'));
    });
  }

  public function getOptionsFormSchema(): array
  {
    $colors = collect($this->colors)->prepend('Default', 'default');

    return [
      Card::make()
        ->schema([
          Radio::make('color')
            ->default('default')
            ->options($colors)
        ]),
    ];
  }
};
